import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ValidationMessageGeneratorService} from '../../validators/validation-message-generator.service';
import {RequiredValidator} from '../../validators/required-validator';

@Component({
  selector: 'lib-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit, OnChanges {

  @Input() property;
  @Output() public addControl = new EventEmitter();

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private validationMessageGenerator: ValidationMessageGeneratorService) { }
  ngOnInit() {
    this.addValidator();
  }
  ngOnChanges(changes: SimpleChanges): void {
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
}
