import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {RequiredValidator} from '../../validators/required-validator';
import {ValidationMessageGeneratorService} from '../../validators/validation-message-generator.service';
@Component({
  selector: 'lib-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  formGroup: FormGroup;
  @Input() property;
  @Output() public addControl = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private validationMessageGenerator: ValidationMessageGeneratorService) {
  }

  ngOnInit() {
    this.addValidator();
  }

  addValidator() {

    const validators = [];
    let dropDowninitialValue = '';
    let dropwDownDisable = false;

    if (this.property.required) {
      validators.push(new RequiredValidator().get());
    }

    if (this.property.values && this.property.values.length === 1) {
      // setUnitValue.setValue(this.property.values[0]);
      dropDowninitialValue = this.property.values[0];
      dropwDownDisable = true;
    } else {
      dropwDownDisable = !this.property.enable;
    }


    this.formGroup = this.formBuilder.group(
      {[this.property.name]: [{value: dropDowninitialValue, disabled: dropwDownDisable}, validators]}
    );
    this.formGroup.updateValueAndValidity();
    this.addControl.emit({key: this.property.name, value: this.formGroup});

  }
  getError = () => {
    return this.validationMessageGenerator.errorMessage(this.formGroup, this.property);
  }
}
