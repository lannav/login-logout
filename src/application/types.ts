import React from 'react';

import { LOG_IN, LOG_OUT } from './constants';

export interface IAuthorizationState {
    isAuthorized: boolean;
    isAuthorizationFailed: boolean;
}

export interface ILogInAction {
    type: typeof LOG_IN;
    payload: ILogInActionPayload;
}

export interface ILogOutAction {
    type: typeof LOG_OUT;
}

export interface ILogInActionPayload {
    username: string;
    password: string;
}

export type AuthorizationActionTypes = ILogInAction | ILogOutAction;

export interface IAppContext {
    state: IAuthorizationState;
    dispatch: React.Dispatch<AuthorizationActionTypes>;
}
