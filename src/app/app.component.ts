import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'ng140520';
  public title1 = 'ng140520';
  public drawer!: MatDrawer;

  constructor() {
    setTimeout(() => {
      console.log('some change');
      this.title = 'NEW TITLE';
      setTimeout(() => {
        this.title1 = 'NEW TITLE';
      });
    }, 10000);
  }

  public setSidenav(drawer: MatDrawer) {
    this.drawer = drawer;
  }

}
