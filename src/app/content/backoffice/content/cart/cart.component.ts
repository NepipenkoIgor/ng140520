import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from '../../../../store';
import { cartProducts, ICartProduct } from '../../../../store/reducers/cart.reducer';
import { decrementProductInCart, incrementProductInCart, removeProductFromCart } from '../../../../store/actions/cart.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products$: Observable<ICartProduct[]> = this.store.select(cartProducts);

  constructor(
    private readonly store: Store<IState>
  ) {
  }

  ngOnInit(): void {
  }

  public increment(product: ICartProduct): void {
    this.store.dispatch(incrementProductInCart({id: product._id}));
  }

  public decrement(product: ICartProduct): void {
    if (product.count === 1) {
      this.remove(product);
      return;
    }
    this.store.dispatch(decrementProductInCart({id: product._id}));
  }

  public remove(product: ICartProduct): void {
    this.store.dispatch(removeProductFromCart({id: product._id}));
  }

}
