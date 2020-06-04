import { Component, Input } from '@angular/core';
import { IProduct } from '../data';
import { ExampleService } from '../example.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input()
  public product!: IProduct;

  @Input()
  public isOdd!: boolean;

  constructor(private exampleService: ExampleService,
  ) {
    console.log('sidenav', this.exampleService.getTimeStamp());
  }


}
