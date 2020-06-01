import {
  Component,
  Input,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { IRate } from './exchange-rate/exchange-rate.component';

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

  public rates: IRate[] = [
    {value: 100, currency: 'RUB'},
    {value: 40, currency: 'USD'},
    {value: 70, currency: 'EUR'},
  ]

  public toggleDrawer() {
    this.drawer.toggle();
  }
}
