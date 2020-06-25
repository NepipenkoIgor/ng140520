import { CartProductComponent } from './cart-product.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';

export const product = {
  _id: '5e7cef4eed3d55e9ccc62887',
  'title': 'Product 234',
  'img': 'assets/img/product-3.jpg',
  'price': 333,
  'author': 'Igor',
  'isFavorite': true,
  count: 2
};
describe('Cart product component', () => {
  let component: CartProductComponent;
  let fixture: ComponentFixture<CartProductComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartProductComponent],
      imports: [MatIconModule]
    });
    fixture = TestBed.createComponent(CartProductComponent);
    component = fixture.componentInstance;
    component.product = product;
    fixture.detectChanges();
    spyOn(component.remove, 'emit')
      .and
      .callThrough();

    spyOn(component.increment, 'emit')
      .and
      .callThrough();

    spyOn(component.decrement, 'emit')
      .and
      .callThrough();
  });
  it('should decrement', () => {
    const el = fixture.debugElement.query(By.css('.decrement'));
    el.triggerEventHandler('click', null);
    expect(component.decrement.emit).toHaveBeenCalledTimes(1);
    expect(component.increment.emit).not.toHaveBeenCalledTimes(1);
    expect(component.remove.emit).not.toHaveBeenCalledTimes(1);
  });
  it('should increment', () => {
    const el = fixture.debugElement.query(By.css('.increment'));
    el.triggerEventHandler('click', null);
    expect(component.decrement.emit).not.toHaveBeenCalledTimes(1);
    expect(component.increment.emit).toHaveBeenCalledTimes(1);
    expect(component.remove.emit).not.toHaveBeenCalledTimes(1);
  });
  it('should remove', () => {
    const el = fixture.debugElement.query(By.css('.remove'));
    el.triggerEventHandler('click', null);
    expect(component.decrement.emit).not.toHaveBeenCalledTimes(1);
    expect(component.increment.emit).not.toHaveBeenCalledTimes(1);
    expect(component.remove.emit).toHaveBeenCalled();
  });
});
