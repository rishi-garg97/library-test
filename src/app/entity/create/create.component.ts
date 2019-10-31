import {Component, OnInit} from '@angular/core';
import _ from 'lodash';
import {GraphQlService} from '../../graphql/graph-ql.service';
import modelSchema from '../../../assets/modelSchema.json';
import uiSchema from '../../../assets/uiSchema.json';
import errorSchema from '../../../assets/errorMessageSchema.json';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  modelSchema;
  uiSchema;
  errorSchema;

  constructor(private graphQlService: GraphQlService, private router: Router) {
  }

  ngOnInit() {
    this.modelSchema = modelSchema;
    this.uiSchema = uiSchema;
    this.errorSchema = errorSchema;
  }

  formStateChange = (change) => {
    change['formControl'].reset();  // reset form when form is submitted.
    const formData = _.find(change, (val, key) => {
      return key === 'formValue';
    });
    this.graphQlService.create(this.modelSchema, formData);
    this.graphQlService.getData(modelSchema).subscribe((data) => {
      this.graphQlService.formData = data;
    });
    this.router.navigate(['']);
  }
}
