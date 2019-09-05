import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';

@Component({
  selector: 'lib-measure',
  templateUrl: './measure.component.html',
  styleUrls: ['./measure.component.css']
})
export class MeasureComponent implements OnInit {
  formGroup: FormGroup = this.formBuilder.group({});
  @Input() property;
  @Output() public addControl = new EventEmitter();

  newProperty: any = {
    measure: {}, unit: {}
  };
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.newProperty.measure = {...this.property};
    this.newProperty.measure.name += 'Measure';
    this.newProperty.unit = {...this.property};
    this.newProperty.unit.name += 'Unit';

  }

  onMeasureChange = (measureValue) => {
    const control = this.formGroup.controls[this.newProperty.unit.name];
    const values = 'values';
    if ( measureValue && this.property[values].length > 1 ) {
      control.enable();
    } else {
      if (this.property[values].length > 1) {
        control.reset();
      }
      control.disable();
    }
  }

  addMeasureControl = (data) => {
    this.formGroup.addControl(data.key, data.value);
    this.formGroup.updateValueAndValidity();
    this.addControl.emit({key: this.property.name , value: this.formGroup});

  }


}
