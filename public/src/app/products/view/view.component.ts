import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  oneProd = null;

  constructor(private httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router) {

      this.route.paramMap.subscribe(
        params => {
          console.log("PARAMS", params.get('id'));
          let observable = this.httpService.oneProduct(params.get('id'));
          observable.subscribe(data => {
            this.oneProd = data
          })
        }
      )



     }

  ngOnInit() {
  }

  delete(id){
    let observable = this.httpService.deleteProd(id);
    observable.subscribe(data => {
      console.log("Product has been removed!", data);
      this.router.navigateByUrl('/')
    })
  }

}
