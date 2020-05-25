import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { IProduct, products$ } from './data';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Unsubscriber } from './utils/unsubscriber';

// ReactiveX = Observer + Iterator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent extends Unsubscriber implements OnInit, OnDestroy {
  public title = 'ng140520';
  public title1 = 'ng140520';
  public drawer!: MatDrawer;
  public products$: Observable<IProduct[]> = products$;
  public products: IProduct[] = [];

  public ngOnInit(): void {
    this.products$
      .pipe(
        takeUntil(this.controlSequence)
      )
      .subscribe((p) => {
        this.products = p;
      }, () => {
      }, () => {
        console.log('complete');
      });
  }

  public setSidenav(drawer: MatDrawer) {
    this.drawer = drawer;
  }

}

