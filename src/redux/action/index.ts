export const ADD_WORKER = "ADD_WORKER";
export const UPDATE_WORKER = "UPDATE_WORKER";
export const DELITE_WORKER = "DELITE_WORKER";

export function addWorker(payload: object) {
    return { type: ADD_WORKER, payload };
  }
  
  export function updateWorker(i: number, worker: object) {
    return { type: UPDATE_WORKER, payload: {i, worker }}
  }
  
  export function deliteWorker(payload: number) {
    return { type: DELITE_WORKER, payload };
  } 