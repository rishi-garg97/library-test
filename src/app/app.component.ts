import {Component, OnInit} from '@angular/core';
import errorMessageSchema from '../assets/errorMessageSchema.json';
import modelSchema from '../assets/modelSchema.json';
import {HttpClient} from '@angular/common/http';

import uiSchema from '../assets/uiSchema.json'; // for Normal Form
// import uiSchema from '../assets/uiSchemaGroup.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'library-test';
  modelSchema;
  uiSchema;
  errorSchema;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.errorSchema = errorMessageSchema;
    this.modelSchema = modelSchema;
    this.uiSchema = uiSchema;
    // this.server();
  }
  //
  // server = () => {
  //   this.http.post('http://localhost:8080/save', {name: 'Rishi Garg', age: 22})
  //     .subscribe((data) => {
  //       console.log(data);
  //     });
  // }
}
