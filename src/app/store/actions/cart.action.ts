import { createAction, props } from '@ngrx/store';
import { IProduct } from '../../custom-interceptor.service';

export const addProductToCart = createAction(
  '[Cart] add product to cart',
  props<{ product: IProduct }>()
);

export const removeProductFromCart = createAction(
  '[Cart] remove product from cart',
  props<{ id: string }>()
);


export const incrementProductInCart = createAction(
  '[Cart] increment product in cart',
  props<{ id: string }>()
);

export const decrementProductInCart = createAction(
  '[Cart] decrement product in cart',
  props<{ id: string }>()
);
