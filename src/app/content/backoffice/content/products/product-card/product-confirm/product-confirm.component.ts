import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { IProduct } from '../../../../../../custom-interceptor.service';

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

@NgModule({
  declarations: [ProductConfirmComponent],
  imports: [
    CommonModule, MatCardModule, MatButtonModule
  ]
})
// @ts-ignore
class ProductConfirmModule {

}
