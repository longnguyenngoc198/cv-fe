import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { RootStateType } from 'types/store';
import { asyncTaskReducer, initialAsyncTaskState } from './asyncTask/reducer';
import { snackBarReducer, initialSnackBarState } from './snackBar/reducer';
import { initialLoginState, loginReducer } from './login/reducer';

export const initialRootState: RootStateType = {
  asyncTaskReducer: initialAsyncTaskState,
  snackBarReducer: initialSnackBarState,
  loginReducer: initialLoginState,
};

export default function configureStore(
  preloadedState: RootStateType = initialRootState
) {
  const middlewares = [thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers =
    process.env.NODE_ENV === 'development'
      ? composeWithDevTools(...enhancers)
      : compose(...enhancers);

  const appReducer = combineReducers<RootStateType>({
    asyncTaskReducer,
    snackBarReducer,
    loginReducer,
  });

  // Reset state after logout
  // const rootReducer = (state: RootStateType, action: AnyAction) => {
  //     return appReducer(state, action)
  // }

  return createStore(appReducer, preloadedState, composedEnhancers as any);
}
