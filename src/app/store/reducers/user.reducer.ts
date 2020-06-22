import { Action, createReducer } from '@ngrx/store';

export interface IUser {
  name: string;
  bonuses: number;
}

const initialState: IUser = {
  name: 'Ihor',
  bonuses: 0.8
};

const reducer = createReducer(initialState);

export function userReducer(state: IUser | undefined, action: Action) {
  return reducer(state, action);
}
