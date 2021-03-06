import {BindingKey} from '@loopback/context';
import {PasswordHasher} from './services/hash.password.bcryptjs';
import {TokenService, UserService} from '@loopback/authentication';
import {User, Credentials} from './models';

const TokenConfig = require('./config/token');

export namespace TokenServiceConstants {
	export const TOKEN_SECRET_VALUE = TokenConfig.TOKEN_SECRET_VALUE;
	export const TOKEN_EXPIRES_IN_VALUE = TokenConfig.TOKEN_EXPIRES_IN_VALUE;
}

export namespace TokenServiceBindings {
	export const TOKEN_SECRET = BindingKey.create<string>(
		'authentication.jwt.secret',
	);
	export const TOKEN_EXPIRES_IN = BindingKey.create<string>(
		'authentication.jwt.expires.in.seconds',
	);
	export const TOKEN_SERVICE = BindingKey.create<TokenService>(
		'services.authentication.jwt.tokenservice',
	);
}

export namespace PasswordHasherBindings {
	export const PASSWORD_HASHER = BindingKey.create<PasswordHasher>(
		'services.hasher',
	);
	export const ROUNDS = BindingKey.create<number>('services.hasher.round');
}

export namespace UserServiceBindings {
	export const USER_SERVICE = BindingKey.create<UserService<User, Credentials>>(
		'services.user.service',
	);
}
