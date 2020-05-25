import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { IProduct, products$ } from './data';
import { Observable } from 'rxjs';
import { MatCheckboxChange } from '@angular/material/checkbox/checkbox';

// ReactiveX = Observer + Iterator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public title = 'ng140520';
  public title1 = 'ng140520';
  public drawer!: MatDrawer;
  public searchText = '';
  public onlyFavorites = false;
  public products$: Observable<IProduct[]> = products$;

  public ngOnInit(): void {
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


