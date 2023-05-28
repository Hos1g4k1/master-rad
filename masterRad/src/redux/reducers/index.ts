import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import {networkInfoReducerName} from 'appRedux/networkInfo/types';
import NetworkInfoReducer from 'appRedux/networkInfo';

const rootReducer = combineReducers({
  [networkInfoReducerName]: NetworkInfoReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
// persistedReducer.purge();

export default persistedReducer;
