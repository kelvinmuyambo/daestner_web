import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Array<any> = [
    {
      name: 'TalkBuy Mobile',
      description: 'Mobile commerce is one of the fast growing retail business in the new economy and is no longer regarded as a luxury for retailers it had fast become a necessity. For Consumers to wait in queue is now the least shopping experience of the new generation in-store shopping experience. Daestner systems offers a wide range of mobile retail products and services which assist businesses to engage more consumers and offer tailor-made, shopping experience.',
      image: 'assets/img/product/talkbuy.jpg'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
