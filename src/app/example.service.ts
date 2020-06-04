import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  private timestamp = Date.now();

  constructor() {

  }

  getTimeStamp() {
    return this.timestamp;
  }
}
