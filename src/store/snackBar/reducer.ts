import {
  SnackBarActionTypes,
  SnackBarReducerState,
  SnackBarActionTypeEnum,
} from './types';

export const initialSnackBarState: SnackBarReducerState = {
  show: false,
  message: '',
  messageType: undefined,
};

export const snackBarReducer = (
  state = initialSnackBarState,
  action: SnackBarActionTypes
) => {
  const { type, payload } = action;
  switch (type) {
    case SnackBarActionTypeEnum.UPDATE: {
      return {
        ...state,
        ...payload,
        show: true,
      };
    }
    case SnackBarActionTypeEnum.RESET:
      return {
        ...initialSnackBarState,
      };
    default:
      return state;
  }
};
