import {BaseValidators} from './base-validator';
import {Validators} from '@angular/forms';

export class RequiredValidator implements BaseValidators {

  constructor() {
  }

  get = () => {
    return Validators.required;
  }
}
