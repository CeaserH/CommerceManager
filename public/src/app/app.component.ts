import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MEAN Exam';
  
  // products = [];
  // oneProd: any;
  // newProd = {
  //   name: "",
  //   qty: 0,
  //   price: 0,
  // }
  // editProd: any;
  // addProduct: any;

  // showAdd = null;


  // constructor(private httpService: HttpService){

  // };

  ngOnInit(){
  };

  

  // addProd(){
  //   const observable = this.httpService.createProd(this.newProd)
  //   observable.subscribe((data) => {
  //     this.newProd = {
  //       name: "",
  //       qty: 0,
  //       price: 0
  //     };
  //     this.getProds();
  //   });
  // }

//   viewProd(prod){
//     this.oneProd = { _id: prod._id, name: prod.name, qty: prod.qty, price: prod.price };
//   }

//   newProduct(newProd){
//     this.addProduct = newProd;
//   }

//   delProd(_id){
//     let observable = this.httpService.deleteProd(_id);
//     observable.subscribe(data => {
//       console.log("Product has been removed!", data);
//       this.getProds();
//     });
//   }

//   modProd(product){
//     this.editProd = {_id: product._id, name: product.name, qty: product.qty, price: product.price };
//   };

//   onEditSubmit(){
//     let observable = this.httpService.updateProd(this.editProd._id, this.editProd);
//     observable.subscribe((data: any) => {
//       console.log("Product has been updated!", data);
//       this.getProds();
//       this.editProd = null;
//     })
//   }

 
// 
}