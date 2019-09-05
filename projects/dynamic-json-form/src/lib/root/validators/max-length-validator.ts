/**
 * Created by rgarg on 08-07-2019.
 */
import {BaseValidators} from './base-validator';
import {Validators} from '@angular/forms';

export class MaxLengthValidator implements BaseValidators {

  constructor() {
  }
  get = (maxLength) => {
    return Validators.maxLength(maxLength);
  }
}
