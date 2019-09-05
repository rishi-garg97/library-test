/**
 * Created by rgarg on 08-07-2019.
 */
import {Validators} from '@angular/forms';
export class MaxValueValidator {
  constructor() {
  }
  get = (maxValue) => {
    return Validators.max(maxValue);
  }
}
