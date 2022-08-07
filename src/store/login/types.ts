export enum LoginActionTypesEnum {
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  UPDATE_LOGIN_STATE = 'UPDATE_LOGIN_STATE',
}

export interface LoginState {
  status: boolean;
  loading: boolean;
}

export interface LoginSuccessAction {
  type: LoginActionTypesEnum.LOGIN_SUCCESS;
  payload: LoginState;
}

export interface UpdateLoginStateAction {
  type: LoginActionTypesEnum.UPDATE_LOGIN_STATE;
  payload: Partial<LoginState>;
}

export type LoginActionTypes = LoginSuccessAction | UpdateLoginStateAction;
