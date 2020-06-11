import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { OneProductComponent } from './one-product/one-product.component';
import { ProductResolverService } from './one-product/product-resolver.service';

export const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: ':productId',
    component: OneProductComponent,
    resolve: {
      product: ProductResolverService
    }
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class ProductsRouterModule {
}
