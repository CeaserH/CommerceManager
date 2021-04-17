import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NewComponent } from './products/new/new.component';
import { ProductsComponent } from './products/products.component';
import { UpdateComponent } from './products/update/update.component';
import { ViewComponent } from './products/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    ProductsComponent,
    UpdateComponent,
    ViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
