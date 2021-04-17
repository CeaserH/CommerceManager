import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  newProd = {
    name: "",
    qty: 0,
    price: 0,
  }

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }

  addProd(){
    const observable = this.httpService.createProd(this.newProd)
    observable.subscribe((data) => {
      this.newProd = {
        name: "",
        qty: 0,
        price: 0
      };
      this.router.navigateByUrl('/')
    });
  }

}
