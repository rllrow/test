import { TypedDispatch } from './store';
import { getComments } from '../api';
import { GET_COMMENTS } from './action-types';

export const initCommentsList = () => async (dispatch: TypedDispatch) => {
  const { data } = await getComments();
  dispatch({ type: GET_COMMENTS, payload: data });
};
