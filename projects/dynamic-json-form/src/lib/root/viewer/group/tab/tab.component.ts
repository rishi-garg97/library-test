import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import _ from 'lodash';
import { GroupService} from '../group.service';
@Component({
  selector: 'lib-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit, OnChanges {

  formGroup: FormGroup = this.formBuilder.group({});
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



}
