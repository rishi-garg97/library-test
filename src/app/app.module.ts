import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {DynamicJsonFormModule} from 'dynamic-json-form';
import {AppRoutingModule} from './app-routing.module';


import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DynamicJsonFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
