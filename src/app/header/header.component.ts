import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  public title = '';

  @Output()
  onTitleClick: EventEmitter<string> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public sendData() {
    this.onTitleClick.emit('Click on title')
  }
}
