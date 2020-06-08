import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  HostListener,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { IModalData, ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @ViewChild('modalContent', {read: ViewContainerRef})
  public modal!: ViewContainerRef;

  public isOpen = false;
  public childComponent!: ComponentFactory<any>;
  public modalContext!: ComponentRef<any>;

  constructor(
    private readonly modalService: ModalService,
    private readonly cfr: ComponentFactoryResolver,
  ) {
  }

  ngOnInit(): void {
    this.modalService.modalSequence$
      .subscribe((componentObj: IModalData | null) => {
        if (componentObj === null) {
          this.close();
          return;
        }
        this.isOpen = true;
        this.childComponent = this.cfr.resolveComponentFactory(componentObj.component);
        this.modalContext = this.modal.createComponent(this.childComponent);
        Object.keys(componentObj.context)
          .forEach((key: string) => {
            this.modalContext.instance[key] = componentObj.context[key];
          });
      });
  }

  // @HostListener('window:keyup.esc')
  @HostListener('window:keyup', ['$event.keyCode'])
  public close(code: number = 27) {
    if (code !== 27) {
      return;
    }
    if (this.modalContext) {
      this.modalContext.destroy();
    }
    this.isOpen = false;

  }

}
