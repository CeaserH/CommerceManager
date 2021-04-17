import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './products/new/new.component';
import { AppComponent } from './app.component';
import { UpdateComponent } from './products/update/update.component';
import { ViewComponent } from './products/view/view.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: 'products', component: ProductsComponent},
  {path: 'products/new', component: NewComponent},
  {path: 'products/update/:id', component: UpdateComponent},
  {path: 'products/:id', component: ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
