import { Component } from '@angular/core';
import { Location } from '@angular/common';

// ReactiveX = Observer + Iterator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private location: Location,
  ) {

  }

  back() {
    this.location.back();
  }

  forward() {
    this.location.forward();
  }

}


