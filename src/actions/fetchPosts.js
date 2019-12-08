import jsonPlaceholder from '../apis/jsonPlaceholder';

export const FETCH_POSTS = 'FETCH_POSTS';

var _active_request = false;

export const fetchPosts = () => async dispatch => {
    if (_active_request) {
      return;
    }
    _active_request = true;
    const response = await jsonPlaceholder.get('/posts');
    dispatch({ type: FETCH_POSTS, payload: response.data });
    _active_request = false;
};
