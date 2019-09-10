import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RequiredValidator} from '../../validators/required-validator';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ValidationMessageGeneratorService} from '../../validators/validation-message-generator.service';

@Component({
  selector: 'lib-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  formGroup: FormGroup;
  @Input() property;
  @Output() public addControl = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private validationMessageGenerator: ValidationMessageGeneratorService) {
  }

  ngOnInit() {
    this.addValidator();
  }

  addValidator = () => {

    const validators = [];
    if (this.property.required) {
      validators.push(new RequiredValidator().get());
    }
    validators.push(Validators.email);

    this.formGroup = this.formBuilder.group({
      [this.property.name]: [{
        value: '',
        disabled: !this.property.enable
      }, validators]
    });
    this.formGroup.updateValueAndValidity();
    this.addControl.emit({key: this.property.name, value: this.formGroup});
    console.log('Email Form Group ', this.formGroup);
  }
  getError = () => {
    return this.validationMessageGenerator.errorMessage(this.formGroup, this.property);
  }


}
