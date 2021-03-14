import { createContext } from 'react';

import { IAppContext } from './types';
import { AUTHORIZATION_INITIAL_STATE } from './constants';

export const AppContext = createContext<IAppContext>({
    state: AUTHORIZATION_INITIAL_STATE,
    dispatch: () => {},
});
