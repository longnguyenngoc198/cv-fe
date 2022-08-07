import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { LoginState } from 'store/login/types';
import { SnackBarReducerState } from 'store/snackBar/types';
import { AsyncTaskReducerState } from './asyncTaskState';

export type DispatchType = ThunkDispatch<any, any, AnyAction>;

export type RootStateType = {
  asyncTaskReducer: AsyncTaskReducerState;
  snackBarReducer: SnackBarReducerState;
  loginReducer: LoginState;
};

export type ThunkActionType = ThunkAction<
  Promise<void>,
  RootStateType,
  Record<string, unknown>,
  AnyAction
>;
