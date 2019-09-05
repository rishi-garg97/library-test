import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-dynamic-json-form',
  template: `
    <lib-form [modelSchema]="modelSchema"
              [uiSchema]="uiSchema"
              [errorMessageSchema]="errorMessageSchema">
    </lib-form>
  `,
  styles: []
})
export class DynamicJsonFormComponent implements OnInit {
  @Input() modelSchema;
  @Input() uiSchema;
  @Input() errorMessageSchema;

  constructor() {
  }

  ngOnInit() {
  }

}
