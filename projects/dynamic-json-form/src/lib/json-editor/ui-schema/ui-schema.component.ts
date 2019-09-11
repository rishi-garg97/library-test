import {
  Component, DoCheck, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges,
  ViewChild
} from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';

@Component({
  selector: 'lib-ui-schema',
  templateUrl: './ui-schema.component.html',
  styleUrls: ['./ui-schema.component.css']
})
export class UiSchemaComponent implements OnInit, OnChanges {

  @ViewChild(JsonEditorComponent, {static: false}) editor: JsonEditorComponent;

  @Input() uiEditorData: any;
  @Output() public uiEditorChange = new EventEmitter();

  public uiSchemaEditorOptions: JsonEditorOptions;

  constructor() {
    this.uiSchemaEditorOptions = new JsonEditorOptions();
    this.uiSchemaEditorOptions.mode = 'code';
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.uiEditorData);
  }


  ngOnInit() {
    // console.log('Old UI Schema', this.uiEditorData);
  }

  getData() {
    if (this.editor.isValidJson()) {
      console.log("Ui Schema is correct");
      this.uiEditorChange.emit(this.editor.get());
    } else {
      console.log('UI Schema is incorrect');
    }
  }

}
