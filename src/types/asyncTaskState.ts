import { ApiError } from './api';

export type TaskStatus<E = ApiError> = {
  processing: boolean;
  error?: E;
};

export type AsyncTaskStatus = {
  // Dynamic key will be generate
  [key: string]: TaskStatus<ApiError> | undefined;
};

export type AsyncTaskReducerState = {
  status: AsyncTaskStatus;
};
