import { combineReducers } from 'redux';
import staffReducer from './staff';
import activeWorkerReducer from './activeWorker';

export default combineReducers({
    staffReducer,
    activeWorkerReducer
  })