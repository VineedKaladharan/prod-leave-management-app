import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SessionCheckService } from 'src/app/services/session-check.service.js';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  hasLoggedout: boolean;
  subscription: Subscription;
  loggedInUser: any = {};
  hasLoggedIn: boolean = false;

  constructor(public router: Router, public sessioCheck: SessionCheckService) {
    // this.loggedInUser.employeeName = '';
    this.subscription = this.sessioCheck.getMessage().subscribe(obj => {
      console.log("obj", obj)
      this.loggedInUser = obj;
      this.hasLoggedIn = true
    });
  }

  ngOnInit(): void {
  }
  logout() {
    this.hasLoggedout = true;
    this.hasLoggedIn = false;
    sessionStorage.setItem("AUTH", '');
    this.router.navigateByUrl('/login');

  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
