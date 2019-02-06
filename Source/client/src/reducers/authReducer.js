import {SET_CURRENT_USER} from '../actions/constant'
import isEmpty from '../validation/function'
const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
    return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
    }
    default:
      return state;
  }
}
