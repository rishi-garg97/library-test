import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'lib-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  constructor() {
  }

  @Input() uiSchema;
  @Output() formStateChange = new EventEmitter();


  ngOnInit() {
  }

  formStateChanged = (change) => {
    this.formStateChange.emit(change);
  }
}
