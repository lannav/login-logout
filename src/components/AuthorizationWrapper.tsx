import React, { useContext, useRef } from 'react';

import { AppContext } from 'application/context';
import { LOG_IN, LOG_OUT } from 'application/constants';

export const AuthorizationWrapper: React.FC = ({ children }) => {
    const { dispatch, state } = useContext(AppContext);
    const nameInput = useRef<HTMLInputElement>(null);
    const passInput = useRef<HTMLInputElement>(null);

    const logIn = (): void => dispatch({
        type: LOG_IN,
        payload: {
            username: nameInput.current?.value ?? '',
            password: passInput.current?.value ?? '',
        },
    });

    const logOut = (): void => dispatch({
        type: LOG_OUT,
    });

    if (state.isAuthorized) {
        return (
            <div>
                { children }

                <div>
                    <button onClick={logOut}>log out</button>
                </div>
            </div>
        );
    }

    return (
        <div>
            <input ref={nameInput} placeholder="Username" />
            <input ref={passInput} placeholder="Password" />

            <button onClick={logIn}>log in</button>

            <div>
                { state.isAuthorizationFailed && 'Invalid Username or Password' }
            </div>
        </div>
    );
};
