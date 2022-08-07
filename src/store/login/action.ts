import { UserCredentials } from 'types/user';
import { DispatchType } from 'types/store';
import {
  LoginActionTypesEnum,
  LoginState,
  LoginSuccessAction,
  UpdateLoginStateAction,
} from './types';

import authService from 'services/auth';
import secureStorage from 'utils/secureStorage';
import { SecureStorageEnum } from 'enums/auth';
import { updateSnackBarAction } from 'store/snackBar/action';

/**
 * Pure actions
 */
export const loginSuccessAction = (
  payload: LoginState
): LoginSuccessAction => ({
  type: LoginActionTypesEnum.LOGIN_SUCCESS,
  payload,
});

export const updateLoginStateAction = (
  payload: Partial<LoginState>
): UpdateLoginStateAction => ({
  type: LoginActionTypesEnum.UPDATE_LOGIN_STATE,
  payload,
});

/**
 * Thunk actions
 */
export const loginAction = (body: UserCredentials) => {
  return async (dispatch: DispatchType) => {
    dispatch(updateLoginStateAction({ loading: true }));
    try {
      const response = await authService.login(body);
      const { accessToken, refreshToken } = response;
      secureStorage.setItem(SecureStorageEnum.ACCESS_TOKEN, accessToken);
      secureStorage.setItem(SecureStorageEnum.REFRESH_TOKEN, refreshToken);
      dispatch(loginSuccessAction({ loading: false, status: true }));
    } catch (error) {
      dispatch(
        updateSnackBarAction({
          message: 'Authorization Error. Invalid Username/ Password.',
          messageType: 'error',
        })
      );
      dispatch(updateLoginStateAction({ loading: false, status: false }));
    }
  };
};
