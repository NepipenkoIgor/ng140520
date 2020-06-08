import { Component } from '@angular/core';
import { IProduct } from '../../data';

@Component({
  selector: 'app-product-confirm',
  templateUrl: './product-confirm.component.html',
  styleUrls: ['./product-confirm.component.css']
})
export class ProductConfirmComponent {

  public product!: IProduct;
  public save!: () => void;
  public close!: () => void;

}
