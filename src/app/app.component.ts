import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Location } from '@angular/common';

// ReactiveX = Observer + Iterator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(
    private location: Location,
   //  private ngZone: NgZone,
    // private appRef: ApplicationRef,
    // private chr: ChangeDetectorRef,
  ) {
   // chr.reattach();
    // setTimeout(() => {
    //   console.log('TICK');
    //   this.appRef.tick();
    // }, 7000);
    // vk.get((user)=>{
    //   this.ngZone.runOutsideAngular(()=>{
    //     this.user = user;
    //   })
    // })
  }

  back() {
    this.location.back();
  }

  forward() {
    this.location.forward();
  }

}


