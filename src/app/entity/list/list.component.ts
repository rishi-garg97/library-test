import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() listData;
  @Input() modelSchema;
  @Output() public listStateChange = new EventEmitter();

  constructor() {
    // console.log('User Data', this.listData);
  }

  ngOnInit() {
  }

  editData = (ele) => {
    console.log(ele);
  }
  deleteData = (ele) => {
    this.listStateChange.emit({key: 'Delete', value: ele});
  }
}
