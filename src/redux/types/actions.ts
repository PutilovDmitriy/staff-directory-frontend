import { WorkerActions, CHANGE_ACTIVE_WORKER } from './../action';
import { FetchActions } from './../action/fetchAction';
import { Worker } from './Worker'; 

//worker action type

export interface AddWorker {
    type: typeof WorkerActions.ADD_WORKER,
    worker: Worker;
}

export interface DeliteWorker {
    type: typeof WorkerActions.DELITE_WORKER,
    id: number;
}

export interface UpdateWorker {
    type: typeof WorkerActions.UPDATE_WORKER,
    worker: Worker,
    i: number;
}

export type WorkerActionTypes =
    | AddWorker 
    | DeliteWorker 
    | UpdateWorker

// fetch action type

export interface FetchStaffBegin {
  type: typeof FetchActions.FETCH_STAFF_BEGIN
}
    
export interface FetchStaffSuccess {
      type: typeof FetchActions.FETCH_STAFF_SUCCESS,
      staff: Worker[];
    }
    
export interface FetchStaffFailure {
      type: typeof FetchActions.FETCH_STAFF_FAILURE,
      error: any;
}

export type FetchActionType = 
    |FetchStaffBegin 
    | FetchStaffSuccess 
    | FetchStaffFailure


//Active Worker

export interface ChangeActiveWorker {
    type: typeof CHANGE_ACTIVE_WORKER,
    id: number; 
}

export type AppActions = WorkerActionTypes | FetchActionType | ChangeActiveWorker