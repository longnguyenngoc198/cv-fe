import { SnackbarOrigin } from '@material-ui/core';

export enum SnackBarActionTypeEnum {
  UPDATE = 'SNACK_BAR_UPDATE',
  RESET = 'SNACK_BAR_RESET',
}

export interface SnackBarType {
  message: string;
  messageType: 'success' | 'info' | 'warning' | 'error' | undefined;
  anchorOrigin?: SnackbarOrigin;
}

export interface SnackBarReducerState extends SnackBarType {
  show: boolean;
}

export interface UpdateSnackBarAction {
  type: typeof SnackBarActionTypeEnum.UPDATE;
  payload: SnackBarType;
}

export interface ResetSnackBarAction {
  type: typeof SnackBarActionTypeEnum.RESET;
  payload: null;
}

export type SnackBarActionTypes = UpdateSnackBarAction | ResetSnackBarAction;
