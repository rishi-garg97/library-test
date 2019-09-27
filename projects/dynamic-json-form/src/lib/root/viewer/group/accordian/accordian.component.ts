import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import _ from 'lodash';
import { GroupService} from '../group.service';

@Component({
  selector: 'lib-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit, OnChanges {
  formGroup: FormGroup = this.formBuilder.group({});
  step = 0;
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


  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
