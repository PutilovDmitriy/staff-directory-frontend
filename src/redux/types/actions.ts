import { Worker } from './Worker';

//worker action type

enum WorkerActions {
    ADD_WORKER = "ADD_WORKER",
    UPDATE_WORKER = "UPDATE_WORKER",
    DELITE_WORKER = "DELITE_WORKER"
}
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

enum FetchActions {
    FETCH_STAFF_BEGIN   = 'FETCH_STAFF_BEGIN',
    FETCH_STAFF_SUCCESS = 'FETCH_STAFF_SUCCESS',
    FETCH_STAFF_FAILURE = 'FETCH_STAFF_FAILURE'
}

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

export type AppActions = WorkerActionTypes | FetchActionType