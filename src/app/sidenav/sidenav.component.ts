import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements AfterContentInit, AfterViewInit {

  @ContentChild('customContent', {read: TemplateRef})
  public contentBlock!: TemplateRef<HTMLElement>;

  @ViewChild('contentPlace', {read: ViewContainerRef})
  public contentPlace!: ViewContainerRef;

  ngAfterViewInit(): void {
    console.log(this.contentPlace);
    this.contentPlace.createEmbeddedView(this.contentBlock);
  }

  ngAfterContentInit(): void {
    console.log(this.contentBlock);
  }

}
