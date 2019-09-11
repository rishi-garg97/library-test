import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {


  constructor() { }
  @Input() uiSchema;


  ngOnInit() {
  }

}
