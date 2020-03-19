export const ADD_WORKER = "ADD_WORKER";
export const UPDATE_WORKER = "UPDATE_WORKER";
export const DELITE_WORKER = "DELITE_WORKER";

export function addWorker(worker) {
    return { type: ADD_WORKER, worker };
  }
  
  export function updateWorker(i, worker) {
    return { type: UPDATE_WORKER, i, worker}
  }
  
  export function deliteWorker(id) {
    return { type: DELITE_WORKER, id };
  }