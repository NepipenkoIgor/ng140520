import {
  Component,
  Input,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input()
  public title = '';

  @Input()
  public title1 = '';

  @Input()
  public drawer!: MatDrawer;

  public toggleDrawer() {
    this.drawer.toggle();
  }
}
