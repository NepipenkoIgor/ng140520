import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HiddenDirective } from './hidden.directive';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'app-test',
  template: `
    <div appHidden #cPrev="hd"></div>
    <span class="hide" (click)="cPrev.hide()"></span>
    <span class="show" (click)="cPrev.show()"></span>
  `
})
class TestComponent {

}

describe('Hidden directive', () => {
  let fixture: ComponentFixture<TestComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, HiddenDirective]
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should show and hide element', () => {
    const element = fixture.debugElement.query(By.directive(HiddenDirective));
    const hideCntl = fixture.debugElement.query(By.css('.hide'));
    const showCntl = fixture.debugElement.query(By.css('.show'));
    expect(element).toBeTruthy();
    expect(hideCntl).toBeTruthy();
    expect(showCntl).toBeTruthy();
    hideCntl.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(element.styles.visibility).toEqual('hidden');
    showCntl.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(element.styles.visibility).toEqual('visible');
  });
});
