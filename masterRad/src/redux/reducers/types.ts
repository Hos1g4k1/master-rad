import {ThunkAction} from 'redux-thunk';
import {Action} from 'redux';
import {
  networkInfoReducerName,
  NetworkInfoReducerType,
} from 'appRedux/networkInfo/types';

export interface RootReducerType {
  [networkInfoReducerName]: NetworkInfoReducerType;
}

export type AppThunk<T = void> = ThunkAction<
  T,
  RootReducerType,
  unknown,
  Action<string>
>;

export type BoundThunk<
  T extends (...args: any[]) => ThunkAction<any, any, any, any>,
> = (...args: Parameters<T>) => ReturnType<ReturnType<T>>;
