import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { ProductsService } from './products.service';
import { SharedModule } from '../../../../shared/shared.module';
import { ProductsRouterModule } from './products-router.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsFilterPipe } from './products-filter.pipe';


@NgModule({
  declarations: [ProductsComponent, ProductCardComponent,
    ProductsFilterPipe],
  imports: [
    SharedModule,
    ProductsRouterModule
  ],
  providers: [ProductsService]
})
export class ProductsModule {
}
