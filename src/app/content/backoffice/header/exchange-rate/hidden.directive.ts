import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHidden]',
  exportAs: 'hd'
})
export class HiddenDirective {

  @HostBinding('style.visibility')
  public visibility: 'visible' | 'hidden' = 'hidden';

  // @HostListener('click', ['$event'])
  // public onResize(e) {
  //   console.log('resize', e);
  // }

  public show(): void {
    this.visibility = 'visible';
  }

  public hide(): void {
    this.visibility = 'hidden';
  }
}
