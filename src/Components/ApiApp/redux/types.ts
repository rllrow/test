import { DELETE_COMMENT, UPDATE_COMMENT } from './action-types';

export enum ActionEnum {
  GET_COMMENTS = 'GET_COMMENTS',
  DELETE_COMMENT = 'DELETE_COMMENT',
  UPDATE_COMMENT = 'UPDATE_COMMENT',
}
export interface getCommentsAction {
  type: ActionEnum.GET_COMMENTS;
  payload: IComment[];
}
export interface updateCommentAction {
  type: ActionEnum.DELETE_COMMENT;
  payload: number;
}
export interface deleteCommentAction {
  type: ActionEnum.UPDATE_COMMENT;
  payload: IComment;
}
export type ActionType = getCommentsAction | updateCommentAction | deleteCommentAction;

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
