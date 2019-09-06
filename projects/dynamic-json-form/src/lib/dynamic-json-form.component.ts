import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'lib-dynamic-json-form',
  template: `
    <lib-editor [modelEditorData]="modelSchema"
                [uiEditorData]="uiSchema"
                [errorEditorData]="errorSchema">
    </lib-editor>
    <!--<lib-form [modelSchema]="modelSchema"-->
              <!--[uiSchema]="uiSchema"-->
              <!--[errorMessageSchema]="errorMessageSchema">-->
    <!--</lib-form>-->
  `,
  styles: []
})
export class DynamicJsonFormComponent implements OnInit, OnChanges {
  @Input() modelSchema;
  @Input() uiSchema;
  @Input() errorSchema;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
