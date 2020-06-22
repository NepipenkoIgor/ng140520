import { Component, Input } from '@angular/core';
import { ModalService } from '../../../../../modal/modal.service';
import { IProduct } from '../../../../../custom-interceptor.service';
import { Store } from '@ngrx/store';
import { IState } from '../../../../../store';
import { addProductToCart } from '../../../../../store/actions/cart.action';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input()
  public product!: IProduct;

  @Input()
  public isOdd!: boolean;


  constructor(
    private readonly modalService: ModalService,
    private readonly store: Store<IState>,
  ) {

  }

  public async addToCart() {
    const component = await import ('./product-confirm/product-confirm.component');
    this.modalService.open({
      component: component.ProductConfirmComponent,
      context: {
        product: {...this.product},
        save: () => {
          console.log('Add to cart', this.product);
          this.store.dispatch(addProductToCart({product: this.product}));
          this.modalService.close();
        },
        close: () => {
          console.log('Close');
          this.modalService.close();
        },
      }
    });
  }


}
