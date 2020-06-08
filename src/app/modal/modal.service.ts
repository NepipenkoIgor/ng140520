import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface IModalData {
  component: any;
  context: any;
}

@Injectable()
export class ModalService {

  private modalSequence$$: Subject<IModalData | null> = new Subject();

  public open(componentObj: IModalData) {
    this.modalSequence$$.next(componentObj);
  }

  public close() {
    this.modalSequence$$.next(null);
  }

  public get modalSequence$(): Observable<IModalData | null> {
    return this.modalSequence$$.asObservable();
  }

}
