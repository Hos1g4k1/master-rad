import {configureStore, MiddlewareAPI} from '@reduxjs/toolkit';
import {Middleware} from 'redux';
import rootReducer from 'appRedux/reducers';
import {selectIsConnected} from 'appRedux/networkInfo/selectors';

const networkMiddleware =
  ({getState}: MiddlewareAPI) =>
  (next: Middleware) =>
  (action: any) => {
    // check if action is thunk action -> if yes, first check connection
    if (typeof action === 'function') {
      const isConnected = selectIsConnected(getState());
      if (!isConnected) {
        return Promise.reject();
      }
      return next(action);
    }
    return next(action);
  };

const store = configureStore({
  reducer: rootReducer,
  preloadedState: {},
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).prepend(networkMiddleware);

    if (__DEV__) {
      // Corresponds to redux-debugger Flipper plugin
      const createDebugger = require('redux-flipper').default;
      middlewares.push(createDebugger());
    }

    return middlewares;
  },
});

export default store;
