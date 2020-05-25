import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { IProduct, products } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'ng140520';
  public title1 = 'ng140520';
  public drawer!: MatDrawer;
  public products: IProduct[] = [];

  constructor(
  ) {
    setTimeout(() => {
      this.products = products;
    }, 10000);
  }

  public setSidenav(drawer: MatDrawer) {
    this.drawer = drawer;
  }

}
