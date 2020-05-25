import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export  class Unsubscriber implements OnDestroy {
  public controlSequence = new Subject();

  public ngOnDestroy(): void {
    this.controlSequence.next(true);
    this.controlSequence.complete();
  }
}
