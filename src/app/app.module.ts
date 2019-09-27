import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {DynamicJsonFormModule} from 'dynamic-json-form';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { GraphQLModule } from './graphql/graphql.module';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    GraphQLModule,
    DynamicJsonFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
