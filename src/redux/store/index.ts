import { AppActions } from './../types/actions';
import { createStore, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import rootReducer from '../reducers';

export type AppState = ReturnType<typeof rootReducer> 

export const Store = createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>));