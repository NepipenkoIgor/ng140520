import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../../../custom-interceptor.service';
import { MatCheckboxChange } from '@angular/material/checkbox/checkbox';
import { Store } from '@ngrx/store';
import { IState } from '../../../../store';
import { getProductsPending } from '../../../../store/actions/products.action';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products$: Observable<IProduct[]> = this.store.select('products');
  public searchText = '';
  public onlyFavorites = false;

  public constructor(
    private store: Store<IState>,
  ) {
  }

  public ngOnInit(): void {
    // console.log(this.activatedRoute);
    // console.log(this.activatedRoute.snapshot.data.state);
    // this.activatedRoute.data.subscribe((d) => {
    //   console.log(d.state);
    // });
   //  this.products$ = this.productsService.getProducts();
    this.store.dispatch(getProductsPending());
  }

  public searchProducts(event: Event) {
    const {value} = (event.target as HTMLInputElement);
    this.searchText = value;
  }

  public toggleFavorites(event: MatCheckboxChange) {
    this.onlyFavorites = event.checked;
  }

}
