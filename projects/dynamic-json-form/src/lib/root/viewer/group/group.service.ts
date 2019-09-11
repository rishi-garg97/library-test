import { Injectable } from '@angular/core';
import {FormBuilder } from '@angular/forms';
import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private formBuilder: FormBuilder) { }

  // it created form group for individual steps.
  buildStepFormGroup = (uiSchema) => {
    const allSteps = [];
    const steps = _.range(uiSchema.totalSteps);
    steps.forEach((step) => {
      allSteps[step] = this.formBuilder.group({});
    });
    return this.formBuilder.group(allSteps);
  }

  // it add individual form control for particular steps
  addFormControl = (data, uiSchema, formGroup) => {
    _.each(uiSchema.steps, (step) => {
      const matchedField = _.find(step.fields, (field) => {
        return field.name === data.key;
      });
      if (matchedField) {
        const fc: any = formGroup.controls[step.sequence - 1];
        fc.addControl(data.key, data.value);
        formGroup.updateValueAndValidity();
      }
    });
  }
}
