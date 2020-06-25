import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { ProductsService } from './products.service';
import { SharedModule } from '../../../../shared/shared.module';
import { ProductsRouterModule } from './products-router.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { OneProductComponent } from './one-product/one-product.component';
import { ProductResolverService } from './one-product/product-resolver.service';


@NgModule({
  declarations: [ProductsComponent, ProductCardComponent,
    ProductsFilterPipe,
    OneProductComponent],
  imports: [
    SharedModule,
    ProductsRouterModule,
  ],
  providers: [ProductsService, ProductResolverService]
})
export class ProductsModule {
}
