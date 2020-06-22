import {
  Component,
  Input,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { IRate } from './exchange-rate/exchange-rate.component';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { IState } from '../../../store';
import { totalProducts } from '../../../store/reducers/cart.reducer';

// import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input()
  public title = '';

  @Input()
  public title1 = '';

  @Input()
  public drawer!: MatDrawer;

  public titleContent = this.domSanitizer.bypassSecurityTrustHtml('<h3 style="color: orange">NgCourse</h3>');

  public totalCount$ = this.store.select(totalProducts)
  constructor(
    private domSanitizer: DomSanitizer,
    private store: Store<IState>,
  ) {
  }

  public rates: IRate[] = [
    {value: 100, currency: 'RUB'},
    {value: 40, currency: 'USD'},
    {value: 70, currency: 'EUR'},
  ];

  public toggleDrawer() {
    this.drawer.toggle();
  }
}
