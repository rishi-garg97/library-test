import {Component, OnInit} from '@angular/core';
import errorMessageSchema from '../assets/errorMessageSchema.json';
import modelSchema from '../assets/modelSchema.json';
import uiSchema from '../assets/uiSchema.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'library-test';
  modelSchema;
  uiSchema;
  errorMessageSchema;

  ngOnInit(): void {
    this.errorMessageSchema = errorMessageSchema;
    this.modelSchema = modelSchema;
    this.uiSchema = uiSchema;
  }
}
