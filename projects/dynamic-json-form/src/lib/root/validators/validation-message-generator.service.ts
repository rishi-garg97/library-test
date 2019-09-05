import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import {CommonService} from '../../../service/common.service';

declare let Mustache: any;

@Injectable({
  providedIn: 'root'
})
export class ValidationMessageGeneratorService {

  validationMessage;
  // validationMessage: any = this.commonService.errorMessageJson;

  constructor(private http: HttpClient) {

  }

  errorMessage = (formGroup, property) => {

    let msg = 'Field is Invalid';
    const control = formGroup.get(property.name);
    const fieldError = this.validationMessage.fields[property.name] ? this.validationMessage.fields[property.name] : '';

    if (control.hasError('required')) {
      if (fieldError.required) {
        msg = fieldError.required;
      } else {
        msg = this.validationMessage.common.required;
      }
    } else if (control.hasError('pattern') && property.name === 'mobileNo') {
      if (fieldError.mobile) {
        msg = fieldError.mobile;
      } else {
        msg = this.validationMessage.common.mobile;
      }
    } else if (control.hasError('pattern')) {
      if (fieldError.pattern) {
        msg = fieldError.pattern;
      } else {
        msg = this.validationMessage.common.pattern;
      }
    } else if (control.hasError('minlength')) {
      if (fieldError.minLength) {
        msg = fieldError.minLength;
      } else {
        msg = this.validationMessage.common.minLength;
      }
    } else if (control.hasError('maxlength')) {
      if (fieldError.maxLength) {
        msg = fieldError.maxLength;
      } else {
        msg = this.validationMessage.common.maxLength;
      }
    } else if (control.hasError('min')) {
      if (fieldError.min) {
        msg = fieldError.min;
      } else {
        msg = this.validationMessage.common.min;
      }
    } else if (control.hasError('max')) {
      if (fieldError.max) {
        msg = fieldError.max;
      } else {
        msg = this.validationMessage.common.max;
      }
    } else if (control.hasError('email')) {
      if (fieldError.email) {
        msg = fieldError.email;
      } else {
        msg = this.validationMessage.common.email;
      }
    }

    const {alias, min, max, minLength, maxLength, pattern} = property;

   return Mustache.render(msg, {fieldName: alias, min, max, minLength, maxLength, pattern});
  }

}
