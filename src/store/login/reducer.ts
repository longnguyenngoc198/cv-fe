import { LoginActionTypes, LoginActionTypesEnum, LoginState } from './types';

export const initialLoginState: LoginState = {
  status: false,
  loading: false,
};

export const loginReducer = (
  state = initialLoginState,
  action: LoginActionTypes
) => {
  switch (action.type) {
    case LoginActionTypesEnum.LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case LoginActionTypesEnum.UPDATE_LOGIN_STATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
