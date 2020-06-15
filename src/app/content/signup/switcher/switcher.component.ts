import { Component, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SwitcherComponent,
      multi: true
    }
  ]
})
export class SwitcherComponent implements ControlValueAccessor {

  public checked = false;
  public onChange!: (checked: boolean) => void;

  @HostListener('click')
  public toggle() {
    this.checked = !this.checked;
    this.onChange(this.checked);
  }


  public writeValue(checked: boolean): void {
    this.checked = checked;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(): void {
  }

}
