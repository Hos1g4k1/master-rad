import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {NetInfoStateType} from '@react-native-community/netinfo';
import {
  networkInfoReducerName,
  NetworkInfoReducerType,
  SetNetworkInfo,
} from 'appRedux/networkInfo/types';

const initialState: NetworkInfoReducerType = {
  isConnected: true,
  type: NetInfoStateType.unknown,
};

const networkInfoSlice = createSlice({
  name: networkInfoReducerName,
  initialState,
  reducers: {
    setNetworkInfo(
      state: NetworkInfoReducerType,
      action: PayloadAction<SetNetworkInfo>,
    ) {
      state.isConnected = action.payload.isConnected;
      state.type = action.payload.type;
    },
  },
});

export default networkInfoSlice.reducer;
export const {setNetworkInfo} = networkInfoSlice.actions;
