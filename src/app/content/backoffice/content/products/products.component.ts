import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../../../custom-interceptor.service';
import { ProductsService } from './products.service';
import { MatCheckboxChange } from '@angular/material/checkbox/checkbox';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products$!: Observable<IProduct[]>;
  public searchText = '';
  public onlyFavorites = false;

  public constructor(
    private productsService: ProductsService
  ) {
  }

  public ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
  }

  public searchProducts(event: Event) {
    const {value} = (event.target as HTMLInputElement);
    this.searchText = value;
  }

  public toggleFavorites(event: MatCheckboxChange) {
    this.onlyFavorites = event.checked;
  }

}
