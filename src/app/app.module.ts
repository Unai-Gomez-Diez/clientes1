import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    AltaClienteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
