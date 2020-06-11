import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent {

  public title = 'ng140520';
  public title1 = 'ng140520';
  public drawer!: MatDrawer;


  public setSidenav(drawer: MatDrawer) {
    this.drawer = drawer;
  }


}
