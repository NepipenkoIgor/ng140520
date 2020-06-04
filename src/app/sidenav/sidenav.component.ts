import {
  Component, EventEmitter, OnInit, Output,
  ViewChild,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ExampleService } from '../example.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  providers: [
    ExampleService
  ]
})
export class SidenavComponent implements OnInit {

  @Output()
  public setSidenavControl: EventEmitter<MatDrawer> = new EventEmitter<MatDrawer>(true);

  @ViewChild(MatDrawer, {static: true})
  public drawer!: MatDrawer;

  constructor(private exampleService: ExampleService,
  ) {
    console.log('sidenav', this.exampleService.getTimeStamp());
  }

  ngOnInit(): void {
    this.setSidenavControl.emit(this.drawer);
  }

}
