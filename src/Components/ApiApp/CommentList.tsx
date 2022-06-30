import React, { useEffect } from 'react';
import { useTypedDispatch, useTypedSelector } from './redux/store';
import './style.scss';
import { initCommentsList } from './redux/action-creators';
import Card from './Card';
import { IComment } from './redux/types';

const CommentList = () => {
  const dispatch = useTypedDispatch();
  const comments = useTypedSelector((state) => state);

  useEffect(() => {
    dispatch(initCommentsList());
  }, [dispatch]);

  return (
    <div className="flex flex-wrap  item-stretch justify-center gap-10 wr">
      {comments.map((comment: IComment) => {
        return <Card comment={comment} key={comment.id} />;
      })}
    </div>
  );
};

export default CommentList;
