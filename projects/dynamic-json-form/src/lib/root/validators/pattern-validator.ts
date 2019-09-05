/**
 * Created by rgarg on 08-07-2019.
 */
import {Validators} from '@angular/forms';
export class PatternValidator {
  constructor() {
  }
  get = (pattern) => {
    return Validators.pattern(pattern);
  }
}
