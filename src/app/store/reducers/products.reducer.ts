import { Action, createReducer, on } from '@ngrx/store';
import { IProduct } from '../../custom-interceptor.service';
import { getProductsSuccess } from '../actions/products.action';

const initialState: IProduct[] = [];

const reducer = createReducer(initialState,
  on(getProductsSuccess, (_, {products}) => {
    return products;
  })
);

export function productsReducer(state: IProduct[] | undefined, action: Action) {
  return reducer(state, action);
}
