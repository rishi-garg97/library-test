import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ValidationMessageGeneratorService} from '../../validators/validation-message-generator.service';
import {RequiredValidator} from '../../validators/required-validator';

@Component({
  selector: 'lib-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {
  formGroup: FormGroup;
  @Input() property;
  @Output() public addControl = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private validationMessageGenerator: ValidationMessageGeneratorService) { }

  ngOnInit() {
   this.addValidator();
  }
  addValidator() {

    const validators = [];
    if (this.property.required) {
      validators.push(new RequiredValidator().get());
    }

    this.formGroup = this.formBuilder.group({
      [this.property.name]: [{
        value: '',
        disabled: !this.property.enable
      }, validators]
    });
    this.formGroup.updateValueAndValidity();
    this.addControl.emit({key: this.property.name, value: this.formGroup});
  }
  getError = () => {
   return this.validationMessageGenerator.errorMessage(this.formGroup, this.property);
  }

  errorClass = () => {
    if (this.formGroup.controls[this.property.name].hasError('required') && !this.formGroup.controls[this.property.name].untouched) {
        return true;
    } else {
      return false;
    }
  }
}
