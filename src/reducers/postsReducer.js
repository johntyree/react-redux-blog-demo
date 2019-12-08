import { FETCH_POSTS } from '../actions';

export default (state = [], action) => {
  return action.type === FETCH_POSTS ? action.payload : state;
}
