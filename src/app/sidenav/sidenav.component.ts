import {
  Component, EventEmitter, OnInit, Output,
  ViewChild,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {

  @Output()
  public setSidenavControl: EventEmitter<MatDrawer> = new EventEmitter<MatDrawer>(true);

  @ViewChild(MatDrawer, {static: true})
  public drawer!: MatDrawer;


  ngOnInit(): void {
    this.setSidenavControl.emit(this.drawer);
  }

}
