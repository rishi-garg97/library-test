import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import _ from 'lodash';
import { GroupService} from '../group.service';


@Component({
  selector: 'lib-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit, OnChanges {
  formGroup: FormGroup = this.formBuilder.group({});
  @Input() uiSchema: any;
  @Output() public formStateChange = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private groupService: GroupService ) {
  }
  ngOnInit() {
    // this.formGroup = this.groupService.buildStepFormGroup(this.uiSchema);
  }

  ngOnChanges() {
    this.formGroup = this.groupService.buildStepFormGroup(this.uiSchema);
  }

  addControl = (data) => {
    this.groupService.addFormControl(data, this.uiSchema, this.formGroup);
  }

  formValue = () => {
    const value = this.formGroup.getRawValue();
    const newValue = {};
    _.each(value, (rawValues, index) => {
      rawValues = _.map(rawValues, (rawVal, key) => {
        return {[`${key}Control`]: rawVal};
      });
      newValue[`${this.uiSchema.viewer} ${index}`] = rawValues;
    });
    this.formStateChange.emit({
      formType: this.uiSchema.type,
      formName: this.uiSchema.name,
      formViewer: this.uiSchema.viewer,
      formValue: newValue
    });
  }

  reset = () => {
    this.formGroup.reset();
  }
}
