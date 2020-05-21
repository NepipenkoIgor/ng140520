import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'ng140520';
  public drawer!: MatDrawer;

  public setSidenav(drawer: MatDrawer) {
    this.drawer = drawer;
  }
}


// console.log('start');
// setTimeout(() => console.log('t1'));
// setTimeout(() => console.log('t2'));
// Promise.resolve().then(() => console.log('p1'));
// Promise.resolve().then(() => console.log('p2'));
// console.log('end');

// task --- task --- task --- task
// start    t1        t2
// end
// p1
// p2
