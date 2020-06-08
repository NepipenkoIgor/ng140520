import { Component, Input, OnInit } from '@angular/core';

export interface IRate {
  value: number;
  currency: string;
}

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent implements OnInit {

  @Input()
  public rates: IRate[] = [];

  public mode: 'on' | 'off' = 'off';

  ngOnInit() {
    setTimeout(() => {
      console.log('init slider')
      this.mode = 'on';
    }, 5000);
  }

}
