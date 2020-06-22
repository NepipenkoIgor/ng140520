import { IProduct } from '../custom-interceptor.service';
import { productsReducer } from './reducers/products.reducer';
import { cartReducer, ICartProduct } from './reducers/cart.reducer';
import { EntityState } from '@ngrx/entity';
import { IUser, userReducer } from './reducers/user.reducer';

export interface IState {
  products: IProduct[];
  cart: EntityState<ICartProduct>;
  user: IUser;
}

export const reducers = {
  products: productsReducer,
  cart: cartReducer,
  user: userReducer,
};
