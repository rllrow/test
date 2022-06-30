import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CommentList from './CommentList';

export const ApiApp = () => {
  return (
    <Provider store={store}>
      <CommentList />
    </Provider>
  );
};
