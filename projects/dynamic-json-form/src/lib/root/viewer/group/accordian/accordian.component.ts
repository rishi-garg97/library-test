import {Component, Input, OnChanges, OnInit} from '@angular/core';
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
    console.log('Form Value ', this.formGroup.getRawValue());
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
