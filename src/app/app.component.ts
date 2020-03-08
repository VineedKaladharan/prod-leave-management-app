import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as users from './../json/listOfUsers.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'leave-management';
  users: any = users;
  newAbsenceObject = {
    from: "19-3-2020",
    to: "21-3-2020",
    leaveType: "Earned Leave",
    todalDaya: "5",
    name: "Vineed Kumar",
    employeeId: "1065",
    commentfromUser: "Test Comment"
  };
  constructor(public router: Router) {
    sessionStorage.setItem(
      "listOfAbsence",
      JSON.stringify([this.newAbsenceObject])
    );
    sessionStorage.setItem('users', JSON.stringify(this.users.default.users));
  }
  ngOnInit(): void {
    this.router.navigateByUrl('/login');
    sessionStorage.setItem("AUTH", '');
  }
}
