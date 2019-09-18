import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ValidationMessageGeneratorService} from './validators/validation-message-generator.service';
import _ from 'lodash';

@Component({
  selector: 'lib-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnChanges {

  @Input() modelSchema;
  @Input() uiSchema;
  @Input() errorSchema;
  @Output() public formStateChange = new EventEmitter();

  modifiedUiSchema;
  constructor(private validationMessageGenerator: ValidationMessageGeneratorService) { }

  ngOnInit() {
    this.initialize();
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      if (cur !== prev) {
        this.initialize();
      }
    }
  }

  formStateChanged = (change) => {
    this.formStateChange.emit({event: 'Form State Changed', value: change});
  }


  private initialize() {
    const uiSchema: any = Object.assign({}, this.uiSchema);

    this.validationMessageGenerator.validationMessage = this.errorSchema;

    if (uiSchema.type === 'Normal') {
      uiSchema.fields = this.formatFields(uiSchema);
    } else {
      _.each(uiSchema.steps, (step) => {
        step.fields = this.formatFields(step);
      });
    }
    this.modifiedUiSchema = uiSchema;
    this.modifiedUiSchema.name = this.modelSchema.name;
    if (this.modelSchema.viewer) {
      this.modifiedUiSchema.viewer = this.modelSchema.viewer;
    }
  }

  formatFields = (schema: any) => {
    return _.map(schema.fields, (field) => {
      const matchedField = _.find(this.modelSchema.properties, {name: field.name});
      if (matchedField) {
        return {...field, ...matchedField};
      }
    });
  }
}
