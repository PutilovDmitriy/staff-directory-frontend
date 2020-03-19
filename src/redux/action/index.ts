import { Worker } from './../types/Worker';
import { AppActions } from "../types/actions";

export enum WorkerActions {
  ADD_WORKER = "ADD_WORKER",
  UPDATE_WORKER = "UPDATE_WORKER",
  DELITE_WORKER = "DELITE_WORKER"
}

export function addWorker(worker: Worker): AppActions {
    return { type: WorkerActions.ADD_WORKER, worker };
  }
  
  export function updateWorker(worker: Worker, i: number): AppActions {
    return { type: WorkerActions.UPDATE_WORKER, worker, i}
  }
  
  export function deliteWorker(id: number): AppActions {
    return { type: WorkerActions.DELITE_WORKER, id };
  } 