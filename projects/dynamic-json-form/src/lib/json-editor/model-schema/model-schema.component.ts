import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {JsonEditorComponent, JsonEditorOptions} from 'ang-jsoneditor';

@Component({
  selector: 'lib-model-schema',
  templateUrl: './model-schema.component.html',
  styleUrls: ['./model-schema.component.css']
})
export class ModelSchemaComponent implements OnInit {

  @ViewChild(JsonEditorComponent, {static: false}) editor: JsonEditorComponent;

  @Input() modelEditorData: any;
  @Output() public modelEditorChange = new EventEmitter();

  public modelSchemaEditorOptions: JsonEditorOptions;
  data: any;

  constructor() {
    this.modelSchemaEditorOptions = new JsonEditorOptions();
    this.modelSchemaEditorOptions.mode = 'code';
    this.modelSchemaEditorOptions.onChange = () => this.data = this.editor.get();

  }

  ngOnInit() {
    // console.log('Old model Schema', this.modelEditorData);
  }

  getData() {
    if (this.editor.isValidJson()) {
      console.log('correct');
      this.modelEditorChange.emit(this.editor.get());
    } else {
      console.log('model Schema is incorrect');
    }
  }

}
