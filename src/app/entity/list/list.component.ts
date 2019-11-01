import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {EntityService} from '../entity.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() listData;
  @Input() modelSchema;
  @Output() public listStateChange = new EventEmitter();

  constructor(private router: Router, private entityService: EntityService) {
    // console.log('User Data', this.listData);
  }

  ngOnInit() {
  }

  editData = (ele) => {
    console.log(ele);
    this.entityService.editedData = ele;
    this.router.navigate(['edit']);

  }
  deleteData = (ele) => {
    this.listStateChange.emit({key: 'Delete', value: ele});
  }
}
