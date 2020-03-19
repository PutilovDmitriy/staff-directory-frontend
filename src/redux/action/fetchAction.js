export const FETCH_STAFF_BEGIN   = 'FETCH_STAFF_BEGIN';
export const FETCH_STAFF_SUCCESS = 'FETCH_STAFF_SUCCESS';
export const FETCH_STAFF_FAILURE = 'FETCH_STAFF_FAILURE';

export const fetchStaffBegin = () => ({
  type: FETCH_STAFF_BEGIN
});

export const fetchStaffSuccess = staff => ({
  type: FETCH_STAFF_SUCCESS,
  staff
});

export const fetchStaffFailure = error => ({
  type: FETCH_STAFF_FAILURE,
  error
});

export function fetchStaff() {
  return dispatch => {
    dispatch(fetchStaffBegin());
    return fetch('https://afternoon-wave-94253.herokuapp.com/staff')
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchStaffSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchStaffFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}