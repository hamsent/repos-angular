import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//importando el componente producto
import { ProductoComponent } from './components/producto/producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
