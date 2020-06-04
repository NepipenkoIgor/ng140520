import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { IProduct } from './data';
import { Observable } from 'rxjs';
import { MatCheckboxChange } from '@angular/material/checkbox/checkbox';
import { ProductsService } from './products.service';
// ReactiveX = Observer + Iterator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    ProductsService
  ],
})
export class AppComponent implements OnInit {
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


