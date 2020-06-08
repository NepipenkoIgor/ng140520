import { Component, Input } from '@angular/core';
import { IProduct } from '../data';
import { ModalService } from '../modal/modal.service';
import { ProductConfirmComponent } from './product-confirm/product-confirm.component';

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
    private readonly modalService: ModalService
  ) {

  }

  public addToCart() {
    this.modalService.open({
      component: ProductConfirmComponent,
      context: {
        product: {...this.product},
        save: () => {
          console.log('Add to cart', this.product);
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
