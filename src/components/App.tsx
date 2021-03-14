import React, { useReducer } from 'react';

import { authorizationReducer } from 'application/reducer';
import { AUTHORIZATION_INITIAL_STATE } from 'application/constants';
import { AppContext } from 'application/context';
import { AuthorizationWrapper } from './AuthorizationWrapper';

export const App: React.FC = () => {
    const [state, dispatch] = useReducer(authorizationReducer, AUTHORIZATION_INITIAL_STATE);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            <AuthorizationWrapper>
                hi, Marcus
            </AuthorizationWrapper>
        </AppContext.Provider>
    );
};
