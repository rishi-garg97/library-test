import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { GroupService} from '../group.service';
import _ from 'lodash';
@Component({
  selector: 'lib-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit, OnChanges {

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
    const newValue = [];
    _.each(value, (rawValues) => {
      rawValues = _.map(rawValues, (rawVal, key) => {
        return {[`${key}Control`]: rawVal};
      });
      newValue.push(rawValues);
    });
    this.formStateChange.emit([{formType: this.uiSchema.type},
      {formName: this.uiSchema.name},
      {formViewer: this.uiSchema.viewer},
      {formValue: newValue}]);
  }

  reset = () => {
    this.formGroup.reset();
  }



}
