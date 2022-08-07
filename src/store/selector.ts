import { RootStateType as IStore } from 'types/store';

// AppReducer
export const sTaskStatus = (key: string) => (store: IStore) =>
  store.asyncTaskReducer.status[key];

// SnackBarReducer
export const getSnackBar = (store: IStore) => store.snackBarReducer;

// LoginReducer
export const getAuthenticated = (store: IStore) => store.loginReducer.status;
export const getIsLoadingLogin = (store: IStore) => store.loginReducer.loading;
