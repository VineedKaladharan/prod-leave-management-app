import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ManagerComponent implements OnInit {
  tableData: any;
  noDataFound: boolean = false;
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    this.tableData = JSON.parse(sessionStorage.getItem('listOfAbsence'));
    console.log(this.tableData);
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {

  }
  open(content) {
    this.modalService.open(content);
  }

  close(content) {
    let a = JSON.stringify(content);
    console.log(a.split(' '))
    let split = a.split(' ');
    if (split[0] === 'Rejected') {
      this.modalService.dismissAll(content);
      this.tableData.splice(0, 1);
    }
    else {
      this.modalService.dismissAll(content);
      this.tableData.splice(0, 1);
    }

    if (this.tableData.length === 0) {
      this.noDataFound = true;
    }
  }

}
