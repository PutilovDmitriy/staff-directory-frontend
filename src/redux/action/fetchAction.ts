import { url } from './../../consts/index';
import { Worker } from './../types/Worker';
import { AppActions } from './../types/actions';
import { Dispatch } from "redux";

export enum FetchActions {
  FETCH_STAFF_BEGIN = 'FETCH_STAFF_BEGIN',
  FETCH_STAFF_SUCCESS = 'FETCH_STAFF_SUCCESS',
  FETCH_STAFF_FAILURE = 'FETCH_STAFF_FAILURE'
}

export const fetchStaffBegin = (): AppActions => {
  return { type: FetchActions.FETCH_STAFF_BEGIN }
};

export const fetchStaffSuccess = (staff: Worker[]): AppActions => {
  return { type: FetchActions.FETCH_STAFF_SUCCESS, staff }
};

export const fetchStaffFailure = (error: any): AppActions => {
  return { type: FetchActions.FETCH_STAFF_FAILURE, error }
};

export function getStaffFromApi() {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStaffBegin());
    return fetch(url)
      .then(response => response.json(),
        error => dispatch(fetchStaffFailure(error)))
      .then(data => {
        dispatch(fetchStaffSuccess(data));
        return data;
      })
  };
}