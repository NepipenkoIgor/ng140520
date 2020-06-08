import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { ProductsService } from './products.service';
import { MatCheckboxChange } from '@angular/material/checkbox/checkbox';
import { IProduct } from '../../custom-interceptor.service';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent implements OnInit {

  public title = 'ng140520';
  public title1 = 'ng140520';
  public drawer!: MatDrawer;
  public searchText = '';
  public onlyFavorites = false;
  public products$!: Observable<IProduct[]>;

  public constructor(
    private productsService: ProductsService
  ) {
  }

  public ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
  }

  public setSidenav(drawer: MatDrawer) {
    this.drawer = drawer;
  }

  public searchProducts(event: Event) {
    const {value} = (event.target as HTMLInputElement);
    this.searchText = value;
  }

  public toggleFavorites(event: MatCheckboxChange) {
    this.onlyFavorites = event.checked;
  }

}
