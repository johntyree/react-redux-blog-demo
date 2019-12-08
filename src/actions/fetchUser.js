import jsonPlaceholder from '../apis/jsonPlaceholder';

export const FETCH_USER = 'FETCH_USER';

const _active_requests = {};

export const fetchUser = id => async dispatch => {
    if (_active_requests[id]) {
      return
    }
    _active_requests[id] = true;
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: FETCH_USER, payload: response.data });
    delete _active_requests[id];
};
