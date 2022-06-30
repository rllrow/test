import { DELETE_COMMENT, GET_COMMENTS, UPDATE_COMMENT } from './action-types';
import { initState } from './store';
import { ActionType } from './types';

export default function bugsReducer(state = initState, action: ActionType) {
  switch (action.type) {
    case GET_COMMENTS: {
      return action.payload;
    }
    case DELETE_COMMENT:
      return [...state.filter((comment) => comment.id !== action.payload)];

    case UPDATE_COMMENT:
      return [...state.map((comment) => (comment.id === action.payload.id ? action.payload : comment))];
    default:
      return state;
  }
}
