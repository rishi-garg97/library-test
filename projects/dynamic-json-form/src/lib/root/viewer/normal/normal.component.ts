import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'lib-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.css']
})
export class NormalComponent implements OnInit, OnChanges {
  formGroup: FormGroup = this.formBuilder.group({});
  @Input() uiSchema;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {

  }

  ngOnChanges() {
    this.formGroup = this.formBuilder.group({}); // when ui or model formSchema changes re initialize form group
  }

  addControl = (data) => {
    this.formGroup.addControl(data.key, data.value);
    this.formGroup.updateValueAndValidity();
  }
  getFormValue = () => {
    console.log(this.formGroup.getRawValue());
  }

  reset = () => {
    this.formGroup.reset();
  }

}
