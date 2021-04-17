import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  create(newProd: any) {
    throw new Error("Method not implemented.");
  }

  constructor(private _http: HttpClient) { }


  getProducts(){
    return this._http.get('/products');
  };

  oneProduct(id){
    return this._http.get("/products/" + id);
  };

  createProd(newProd){
    return this._http.post("/products/new", newProd);
  };

  updateProd(id, editProd){
    return this._http.put("/products/update/" + id, editProd);
  };

  deleteProd(id){
    return this._http.delete("/products/" + id);
  };

}
