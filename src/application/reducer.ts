import { AuthorizationActionTypes, IAuthorizationState, ILogInActionPayload } from './types';
import { AUTHORIZATION_INITIAL_STATE, CORRECT_PASSWORD, CORRECT_USERNAME } from './constants';

export const authorizationReducer = (
    state: IAuthorizationState,
    action: AuthorizationActionTypes,
): IAuthorizationState => {
    switch (action.type) {
        case 'LOG_IN':
            return _logIn(state, action.payload);

        case 'LOG_OUT':
            return AUTHORIZATION_INITIAL_STATE;

        default:
            return state;
    }
};

const _logIn = (state: IAuthorizationState, { password, username }: ILogInActionPayload): IAuthorizationState => {
    if (password === CORRECT_PASSWORD && username === CORRECT_USERNAME) {
        return {
            isAuthorized: true,
            isAuthorizationFailed: false,
        };
    }

    return {
        isAuthorized: false,
        isAuthorizationFailed: true,
    }
};
