import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import _ from 'lodash';

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
  @Output()formStateChanged = new EventEmitter();

  inputUiEditorData;

  modifiedModelEditorData;  // when changes occur in model editor
  modifiedUiEditorData;   // when changes occur in ui editor
  modifiedErrorEditorData; // when changes occur in error editor

  ngOnInit() {
    this.modifiedModelEditorData = this.modelEditorData;
    this.inputUiEditorData = _.cloneDeep(this.uiEditorData);
    this.modifiedUiEditorData =  _.cloneDeep(this.uiEditorData);
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

  formStateChange = (change) => {
    this.formStateChanged.emit(change);
    // this.formStateChanged.emit([{key: change[0].key , value: change[0].value}, {key: change[1].key , value: change[1].value}]);
  }

}
