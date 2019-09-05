import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
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
  modifiedUiSchema;
  @Input() errorMessageSchema;
  constructor(private validationMessageGenerator: ValidationMessageGeneratorService) { }

  ngOnInit() {
    this.initialize();
  }

  ngOnChanges(changes: SimpleChanges): void {}


  private initialize() {
    const uiSchema: any = Object.assign({}, this.uiSchema);

    this.validationMessageGenerator.validationMessage = this.errorMessageSchema;

    if (uiSchema.type === 'Normal') {
      uiSchema.fields = this.formatFields(uiSchema);
    } else {
      _.each(uiSchema.steps, (step) => {
        step.fields = this.formatFields(step);
      });
    }
    this.modifiedUiSchema = uiSchema;
    this.modifiedUiSchema.name = this.modelSchema.name;
    console.log('Modified Schema From ', this.modifiedUiSchema);
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
