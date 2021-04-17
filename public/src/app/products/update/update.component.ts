import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
  editProd = null;
  oneProd: any = null;

  constructor(private httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router) { 

      this.route.paramMap.subscribe( 
        params => {
          console.log("PARAMS", params.get('id'));
          let observable = this.httpService.oneProduct(params.get('id'));
          observable.subscribe(data => {
            this.oneProd = data



            this.editProd = { _id: this.oneProd._id, 
              name: this.oneProd.name, 
              qty: this.oneProd.qty, 
              price: this.oneProd.price
            }
          })
        }
      )
  }
  ngOnInit() {
  }

  // modProd(product){
  //   this.editProd = {_id: product._id, name: product.name, qty: product.qty, price: product.price };
  //   };

  updateProduct(){
    let observable = this.httpService.updateProd(this.editProd._id, this.editProd)
    observable.subscribe((data: any) => {
      console.log("Product has been updated!", data);
      this.editProd = null;
      this.router.navigateByUrl('/')
    })
  }

}
