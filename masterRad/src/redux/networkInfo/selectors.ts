import {RootReducerType} from 'appRedux/reducers/types';
import {networkInfoReducerName} from 'appRedux/networkInfo/types';

export const selectNetworkInfo = (state: RootReducerType) =>
  state[networkInfoReducerName];
export const selectIsConnected = (state: RootReducerType) =>
  state[networkInfoReducerName].isConnected;
export const selectNetworkType = (state: RootReducerType) =>
  state[networkInfoReducerName].type;
