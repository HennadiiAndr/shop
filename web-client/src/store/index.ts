import {Action, applyMiddleware, createStore} from "redux";
import thunk, {ThunkAction} from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

import {rootReducer, RootState} from "./root";

const middlewares = [thunk];

export const store = createStore(rootReducer, undefined, composeWithDevTools(applyMiddleware(...middlewares)));

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
