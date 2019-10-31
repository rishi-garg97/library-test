import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {DynamicJsonFormModule} from 'dynamic-json-form';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { GraphQLModule } from './graphql/graphql.module';
import { MatTableModule } from '@angular/material'
import {AppComponent} from './app.component';
import { CreateComponent } from './entity/create/create.component';
import { ListComponent } from './entity/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    GraphQLModule,
    MatTableModule,
    DynamicJsonFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
