import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import * as users from './../../../json/listOfUsers.json'
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SessionCheckService } from 'src/app/services/session-check.service.js';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: any = users;
  loginObj = {
    userName: "",
    password: ""
  }
  constructor(public router: Router, public sessioCheck: SessionCheckService) { }

  ngOnInit(): void {
    console.log("users", this.users.default.users);

  }


  logForm(obj) {
    console.log('submitted', obj);
    console.log("cred-CHNAGED_OBJ", JSON.parse(sessionStorage.getItem('users')))
    let filteredObj = JSON.parse(sessionStorage.getItem('users')).filter((elem) => {
      return elem.userName === obj.username && elem.password === obj.password
    });
    console.log('fliterOBJ', filteredObj);

    if (obj.username === 'admin' && obj.password === 'admin') {
      this.router.navigateByUrl('/manage-users')
      sessionStorage.setItem('AUTH', JSON.stringify(obj));
      this.sessioCheck.sendMessage(obj);
    }
    else if (filteredObj.length === 0) {
      alert("Please enetr the corect credentials");
    }
    else if (filteredObj[0].role === 'User') {
      this.router.navigateByUrl('/user')
      sessionStorage.setItem('AUTH', JSON.stringify(filteredObj[0]));
      this.sessioCheck.sendMessage(filteredObj[0]);
    }
    else {
      this.router.navigateByUrl('/manager');
      sessionStorage.setItem('AUTH', JSON.stringify(filteredObj[0]));
      this.sessioCheck.sendMessage(filteredObj[0]);
    }

  }

}
