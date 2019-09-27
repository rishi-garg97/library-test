import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import _ from 'lodash';

@Component({
  selector: 'lib-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.css']
})
export class NormalComponent implements OnInit, OnChanges {
  formGroup: FormGroup = this.formBuilder.group({});
  @Input() uiSchema;
  @Output() public formStateChange = new EventEmitter();


  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    // console.log(this.uiSchema);
  }

  ngOnChanges() {
    this.formGroup = this.formBuilder.group({}); // when ui or model formSchema changes re initialize form group
  }

  addControl = (data) => {
    this.formGroup.addControl(data.key, data.value);
    this.formGroup.updateValueAndValidity();
  }
  getFormValue = () => {
    let rawValues = this.formGroup.getRawValue();
    rawValues = _.map(rawValues, (rawVal, key) => {
      return {[`${key}Control`]: rawVal};
    });
    this.formStateChange.emit({formType: this.uiSchema.type,
      formName: this.uiSchema.name,
      formValue: rawValues});
  }

  reset = () => {
    this.formGroup.reset();
  }

}
