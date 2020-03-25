import { AppActions } from './../types/actions';
import { Worker } from './../types/Worker';

export enum WorkerActions {
  ADD_WORKER = "ADD_WORKER",
  UPDATE_WORKER = "UPDATE_WORKER",
  DELETE_WORKER = "DELETE_WORKER"
}
export const CHANGE_ACTIVE_WORKER = 'CHANGE_ACTIVE_WORKER';

export const addWorker = (worker: Worker): AppActions => {
  return { type: WorkerActions.ADD_WORKER, worker };
}

export const updateWorker = (worker: Worker, id: number): AppActions => {
  return { type: WorkerActions.UPDATE_WORKER, worker, id }
}

export const deleteWorker = (id: number): AppActions => {
  return { type: WorkerActions.DELETE_WORKER, id };
}

export const changeActiveWorker = (id: number | null): AppActions => {
  return { type: CHANGE_ACTIVE_WORKER, id }
}