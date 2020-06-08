import { Component, Input } from '@angular/core';
import { ModalService } from '../../../modal/modal.service';
import { IProduct } from '../../../custom-interceptor.service';


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

  public async addToCart() {
    console.time('LOAD')
    const component = await import ('./product-confirm/product-confirm.component');
    console.timeEnd('LOAD')
    this.modalService.open({
      component: component.ProductConfirmComponent,
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
