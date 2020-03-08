import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-ui',
  templateUrl: './admin-ui.component.html',
  styleUrls: ['./admin-ui.component.css']
})
export class AdminUiComponent implements OnInit {
  users: any;


  newObj = {
    newUserName: '',
    newPassword: ''
  }
  constructor(config: NgbModalConfig, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.users = JSON.parse(sessionStorage.getItem('users'));
  }
  open(content) {
    this.modalService.open(content);
  }
  close(content) {
    // let a = JSON.stringify(content);

    console.log("content", content)
    console.log("newObj", this.newObj)
    // let split = a.split(' ');
    let temp = this.users[content];
    console.log('temp', temp);
    temp.userName = this.newObj.newUserName;
    temp.password = this.newObj.newPassword;
    // let mod = Object.assign({ employeeName: this.newObj.newUserName, password: this.newObj.newPassword }, ...temp)
    // console.log("mod", mod)
    console.log('new-temp', temp);
    console.log('users', this.users);
    this.modalService.dismissAll(content);
    sessionStorage.setItem('users', JSON.stringify(this.users));
    // this.users.splice(0, 1);
  }
}
