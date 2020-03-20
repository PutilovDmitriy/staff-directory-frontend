import { AppActions } from './../types/actions';
import { Worker } from './../types/Worker';

export enum WorkerActions {
  ADD_WORKER = "ADD_WORKER",
  UPDATE_WORKER = "UPDATE_WORKER",
  DELITE_WORKER = "DELITE_WORKER"
}
export const CHANGE_ACTIVE_WORKER = 'CHANGE_ACTIVE_WORKER';

export const addWorker = (worker: Worker): AppActions => {
    return { type: WorkerActions.ADD_WORKER, worker };
  }
  
  export const updateWorker = (worker: Worker, i: number): AppActions => {
    return { type: WorkerActions.UPDATE_WORKER, worker, i}
  }
  
  export const deliteWorker = (id: number): AppActions => {
    return { type: WorkerActions.DELITE_WORKER, id };
  } 

  export const changeActiveWorker = (id: number): AppActions => {
    return { type: CHANGE_ACTIVE_WORKER, id }
  }