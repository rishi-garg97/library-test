import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import _ from 'lodash';
@Component({
  selector: 'lib-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit, OnChanges {

  formGroup: FormGroup = this.formBuilder.group({});
  @Input() uiSchema: any;

  constructor(private formBuilder: FormBuilder) {
  }
  ngOnInit() {
    this.buildStepFormGroup();
  }

  ngOnChanges() {
    this.buildStepFormGroup();
  }

  buildStepFormGroup = () => {
    const allSteps = [];
    const steps = _.range(this.uiSchema.totalSteps);
    steps.forEach((step) => {
      allSteps[step] = this.formBuilder.group({});
    });
    this.formGroup = this.formBuilder.group(allSteps);
  }


  addControl = (data) => {
    _.each(this.uiSchema.steps, (step) => {
      const matchedField = _.find(step.fields, (field) => {
        return field.name === data.key;
      });
      if (matchedField) {
        const fc: any = this.formGroup.controls[step.sequence - 1];
        fc.addControl(data.key, data.value);
        this.formGroup.updateValueAndValidity();
      }
    });
  }

  formValue = () => {
    console.log('Form Value ', this.formGroup.getRawValue());
  }

  reset = () => {
    this.formGroup.reset();
  }



}
