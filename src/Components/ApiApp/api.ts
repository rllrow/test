import axios, { AxiosPromise } from 'axios';
import { IComment } from './redux/types';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

const endpoints = {
  getComments: (): string => '/comments?_start=0&_limit=10',
};

export const getComments = (): AxiosPromise<IComment> => {
  return api.get(endpoints.getComments());
};
