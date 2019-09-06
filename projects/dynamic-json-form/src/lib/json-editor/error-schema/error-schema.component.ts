import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {JsonEditorComponent, JsonEditorOptions} from 'ang-jsoneditor';

@Component({
  selector: 'lib-error-schema',
  templateUrl: './error-schema.component.html',
  styleUrls: ['./error-schema.component.css']
})
export class ErrorSchemaComponent implements OnInit {

  @ViewChild(JsonEditorComponent, {static: false}) editor: JsonEditorComponent;

  @Input() errorEditorData: any;
  @Output() public errorEditorChange = new EventEmitter();

  public errorSchemaEditorOptions: JsonEditorOptions;

  constructor() {
    this.errorSchemaEditorOptions = new JsonEditorOptions();
    this.errorSchemaEditorOptions.mode = 'code';
  }


  ngOnInit() {
    console.log('Old model Schema', this.errorEditorData);
  }

  getData(event) {
    if (this.editor.isValidJson()) {
      this.errorEditorChange.emit(this.editor.get());
      console.log('correct');
    } else {
      console.log('UI Schema is incorrect');
    }
  }

}
