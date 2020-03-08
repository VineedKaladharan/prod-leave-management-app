import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'leave-management';
  newAbsenceObject = {
    from: "19-3-2020",
    to: "21-3-2020",
    leaveType: "Earned Leave",
    todalDaya: "5",
    name: "Vineed Kumar",
    employeeId: "1065",
    commentfromUser: "Test Comment"
  };
  constructor(){
    sessionStorage.setItem(
      "listOfAbsence",
      JSON.stringify([this.newAbsenceObject])
    );
  }
}
