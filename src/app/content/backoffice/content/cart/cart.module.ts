import { NgModule } from '@angular/core';
import { CartComponent } from './cart.component';
import { CartProductComponent } from './cart-product/cart-product.component';
import { SharedModule } from '../../../../shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [CartComponent, CartProductComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: CartComponent
    }])
  ]
})
export class CartModule {
}
