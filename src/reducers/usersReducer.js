import { FETCH_USER } from '../actions';

export default (state = {}, action) => {
  if (action.type === FETCH_USER) {
    const userId = action.payload.id;
    const userInfo = action.payload;
    return {...state, [userId]: userInfo };
  }
  return state
}
