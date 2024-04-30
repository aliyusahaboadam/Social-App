import { configureStore} from '@reduxjs/toolkit';
import   rootReducer    from './reducer';
import initialState from './initialState';
import { composeWithDevTools } from '@redux-devtools/extension';


const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    devTools: composeWithDevTools(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),

});

export default store;