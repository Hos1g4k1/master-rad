import {NetInfoStateType} from '@react-native-community/netinfo';

export const networkInfoReducerName = 'networkInfo';

export type NetworkInfoReducerType = {
  isConnected: boolean;
  type: NetInfoStateType;
};

export type SetNetworkInfo = {
  isConnected: boolean;
  type: NetInfoStateType;
};
