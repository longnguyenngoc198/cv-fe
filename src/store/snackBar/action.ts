import { SnackBarType, SnackBarActionTypeEnum } from './types';
import { ApiError } from 'types/api';

export function updateSnackBarAction(payload: SnackBarType, error?: ApiError) {
  // Return API response error message if exists
  if (error && error.data && error.data.message) {
    return {
      type: SnackBarActionTypeEnum.UPDATE,
      payload: {
        message: error.data.message,
        messageType: 'error',
      },
    };
  }
  return {
    type: SnackBarActionTypeEnum.UPDATE,
    payload,
  };
}

export function resetSnackBarAction() {
  return {
    type: SnackBarActionTypeEnum.RESET,
  };
}
