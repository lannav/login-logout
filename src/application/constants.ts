import { IAuthorizationState } from './types';

export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const CORRECT_USERNAME = 'marcus';
export const CORRECT_PASSWORD = '123';
export const AUTHORIZATION_INITIAL_STATE: IAuthorizationState = {
    isAuthorizationFailed: false,
    isAuthorized: false,
};
