import { createAction, props } from '@ngrx/store';
import { IProduct } from '../../custom-interceptor.service';

// function / class
export const getProductsPending = createAction('[Products] get products from server pending');
export const getProductsSuccess = createAction('[Products] get products from server success', props<{ products: IProduct[] }>());
