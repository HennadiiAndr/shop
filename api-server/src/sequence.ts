import {inject} from '@loopback/context';
import {
  FindRoute,
  InvokeMethod,
  ParseParams,
  Reject,
  RequestContext,
  RestBindings,
  Send,
  SequenceHandler,
  HttpErrors,
} from '@loopback/rest';
import {
  AuthenticationBindings,
  AuthenticateFn,
  AUTHENTICATION_STRATEGY_NOT_FOUND,
  USER_PROFILE_NOT_FOUND,
} from '@loopback/authentication';
import {
  AuthorizationBindings,
  AuthorizeFn,
  UserPermissionsFn,
  AuthorizeErrorKeys,
  PermissionKey,
} from './authorization';
import {MyUserProfile} from "./models";

const SequenceActions = RestBindings.SequenceActions;

export class MyAuthenticationSequence implements SequenceHandler {
  constructor(
      @inject(SequenceActions.FIND_ROUTE)
      protected findRoute: FindRoute,

      @inject(SequenceActions.PARSE_PARAMS)
      protected parseParams: ParseParams,

      @inject(SequenceActions.INVOKE_METHOD)
      protected invoke: InvokeMethod,

      @inject(SequenceActions.SEND)
      protected send: Send,

      @inject(SequenceActions.REJECT)
      protected reject: Reject,

      @inject(AuthenticationBindings.AUTH_ACTION)
      protected authenticateRequest: AuthenticateFn,

      @inject(AuthorizationBindings.USER_PERMISSIONS)
      protected fetchUserPermissions: UserPermissionsFn,

      @inject(AuthorizationBindings.AUTHORIZE_ACTION)
      protected checkAuthorization: AuthorizeFn,
  ) {}

  async handle(context: RequestContext) {
    try {
      const {request, response} = context;
      const route = this.findRoute(request);

      //call authentication action
      const authUser: MyUserProfile | undefined = await this.authenticateRequest(request) as MyUserProfile;

      // allow some paths, we can do it in controller by adding ['*'], but it is a internal framework path
      const allowedPaths = [
        /^\/explorer.*/,
        /^\/api\/explorer.*/,
      ];
      if (!allowedPaths.find(path => path.test(route.path))) {
        const permissions: PermissionKey[] = this.fetchUserPermissions(
            authUser ? authUser.permissions : [],
            authUser ? authUser.role.permissions : [],
        );
        const isAccessAllowed: boolean = await this.checkAuthorization(
            permissions,
        );
        if (!isAccessAllowed) {
          throw new HttpErrors.Forbidden(AuthorizeErrorKeys.NotAllowedAccess);
        }
      }

      // Authentication successful, proceed to invoke controller
      const args = await this.parseParams(request, route);
      const result = await this.invoke(route, args);
      this.send(response, result);
    } catch (error) {
      //
      // The authentication action utilizes a strategy resolver to find
      // an authentication strategy by name, and then it calls
      // strategy.authenticate(request).
      //
      // The strategy resolver throws a non-http error if it cannot
      // resolve the strategy. When the strategy resolver obtains
      // a strategy, it calls strategy.authenticate(request) which
      // is expected to return a user profile. If the user profile
      // is undefined, then it throws a non-http error.
      //
      // It is necessary to catch these errors and add HTTP-specific status
      // code property.
      //
      // Errors thrown by the strategy implementations already come
      // with statusCode set.
      //
      // In the future, we want to improve `@loopback/rest` to provide
      // an extension point allowing `@loopback/authentication` to contribute
      // mappings from error codes to HTTP status codes, so that application
      // don't have to map codes themselves.
      if (
          error.code === AUTHENTICATION_STRATEGY_NOT_FOUND ||
          error.code === USER_PROFILE_NOT_FOUND
      ) {
        Object.assign(error, {statusCode: 401 /* Unauthorized */});
      }

      this.reject(context, error);
      return;
    }
  }
}
