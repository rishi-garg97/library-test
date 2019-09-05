/**
 * Created by rgarg on 08-07-2019.
 */

import {Validators} from '@angular/forms';

export class MinValueValidator {
  constructor() {
  }
  get = (minValue) => {
    return Validators.min(minValue);
  }
}
