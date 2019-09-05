import {BaseValidators} from './base-validator';
import {Validators} from '@angular/forms';

export class MinLengthValidator implements BaseValidators {

  constructor() {
  }
  get = (minLength) => {
    return Validators.minLength(minLength);
  }
}
