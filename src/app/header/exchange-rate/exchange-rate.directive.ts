import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { IRate } from './exchange-rate.component';

@Directive({
  selector: '[appExchangeRate]'
})
export class ExchangeRateDirective implements OnInit {

  @Input('appExchangeRateFrom')
  public rates!: IRate[];


  @Input('appExchangeRateAutoplay')
  public set autoplay(mode: 'on' | 'off') {
    console.log('AUTOPLAY', mode);
    this.mode = mode;
    if (mode !== 'on') {
      this.clearInterval();
      return;
    }
    this.resetInterval();
  };

  @Input('appExchangeRateDuration')
  public set duration(ms: number) {
    this.ms = ms;
  };

  public ms!: number;
  public mode!: 'on' | 'off';

  public context: any;
  public index = 0;
  public intervalId!: number;

  constructor(
    private tmp: TemplateRef<any>,
    private vcr: ViewContainerRef,
  ) {
  }

  public ngOnInit(): void {
    this.context = {
      $implicit: this.rates[this.index],
      controller: {
        next: () => this.next(),
        prev: () => this.prev(),
      }
    };
    this.vcr.createEmbeddedView(this.tmp, this.context);
    this.resetInterval();
  }

  public next(): void {
    this.resetInterval();
    this.index++;
    if (this.index >= this.rates.length) {
      this.index = 0;
    }
    this.context.$implicit = this.rates[this.index];
  }

  public prev(): void {
    this.resetInterval();
    this.index--;
    if (this.index < 0) {
      this.index = this.rates.length - 1;
    }
    this.context.$implicit = this.rates[this.index];
  }

  private resetInterval(): void {
    if (this.mode !== 'on') {
      return;
    }
    this.clearInterval().initInterval();
  }

  private initInterval(): void {
    this.intervalId = setInterval(() => {
      this.next();
    }, this.ms);
  }

  private clearInterval(): this {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    return this;
  }

}
