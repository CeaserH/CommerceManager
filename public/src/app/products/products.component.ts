import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
      let observable = this.httpService.getProducts();
      observable.subscribe((data: any) => {
        this.products = data;
      });

  }



}
