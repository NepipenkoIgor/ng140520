import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css']
})
export class OneProductComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    // this.activatedRoute.paramMap.subscribe((paramMap) => {
    //   console.log(paramMap.get('productId'));
    // });
    // this.activatedRoute.params.subscribe((params) => {
    //   console.log(params.productId);
    // });
    this.activatedRoute.data.subscribe((data) => {
      console.log(data);
    });
  }

}
