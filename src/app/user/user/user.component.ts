import { Component, OnInit } from "@angular/core";
import { NgbDate, NgbCalendar } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  hoveredDate: NgbDate;
  finishedSelecting: boolean;
  fromDate: NgbDate;
  toDate: NgbDate;
  newAbsence: boolean;
  fromDateForInput: any;
  toDateForInput: any;
  todaldays: any;
  leaveType: any = {
    EarnedLeave: 5,
    AdvancedEarnedLeave: 5,
    LeaveWithoutpay: -1,
    maternityLeave: -1,
    PaternityLeave: -1,
    CompensatoryLeave: 3,
    specialDayOffBirthday: 1,
    specialDayOffWedding: 1
  };

  newAbsenceObject = {
    from: "19-3-2020",
    to: "21-3-2020",
    leaveType: "Earned Leave",
    todalDaya: "5",
    name: "Vineed Kumar",
    employeeId: "1065",
    commentfromUser: "Test Comment"
  };
  comment: any;

  constructor(calendar: NgbCalendar) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), "d", 1);
  }

  ngOnInit() {
    this.newAbsence = false;
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
    // console.log("from", this.fromDate);
    // console.log("to", this.toDate);
    this.fromDateForInput =
      this.fromDate.day + "-" + this.fromDate.month + "-" + this.fromDate.year;
    this.toDateForInput =
      this.toDate.day + "-" + this.toDate.month + "-" + this.toDate.year;
    this.todaldays = this.toDate.day - this.fromDate.day;
    console.log(this.fromDateForInput);
  }

  isHovered(date: NgbDate) {
    return (
      this.fromDate &&
      !this.toDate &&
      this.hoveredDate &&
      date.after(this.fromDate) &&
      date.before(this.hoveredDate)
    );
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return (
      date.equals(this.fromDate) ||
      date.equals(this.toDate) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }

  onDateSelect(e) {
    console.log(e);
    this.finishedSelecting = true;
  }
  clickedApplyForNewAbsence(e) {
    this.newAbsence = true;
  }
  cancelled() {
    this.newAbsence = false;
    this.finishedSelecting = false;
  }

  submitAbsence() {
    this.newAbsenceObject = {
      from: this.fromDateForInput,
      to: this.toDateForInput,
      leaveType: "Earned Leave",
      todalDaya: "5",
      name: "Vineed Kumar",
      employeeId: "1065",
      commentfromUser: this.comment
    };
    let sessionObjects = JSON.parse(sessionStorage.getItem("listOfAbsence"));
    let a = sessionObjects.push(this.newAbsenceObject);
    console.log(JSON.parse(a));
    sessionStorage.setItem("listOfAbsence", JSON.stringify(sessionObjects));
  }
}
