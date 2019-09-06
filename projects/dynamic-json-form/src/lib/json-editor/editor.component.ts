import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor() { }
  @Input()modelEditorData;
  @Input()uiEditorData;
  @Input()errorEditorData;

  modifiedModelEditorData;  // when changes occur in model editor
  modifiedUiEditorData;   // when changes occur in ui editor
  modifiedErrorEditorData; // when changes occur in error editor

  ngOnInit() {
    this.modifiedModelEditorData = this.modelEditorData;
    this.modifiedUiEditorData = this.uiEditorData;
    this.modifiedErrorEditorData = this.errorEditorData;
  }

  modelEditorChange = (data) => {
    this.modifiedModelEditorData = data;
  }

  uiEditorChange = (data) => {
    this.modifiedUiEditorData = data;
  }

  errorEditorChange = (data) => {
    this.modifiedErrorEditorData = data;
  }


}
