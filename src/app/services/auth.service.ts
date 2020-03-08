import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  auth = sessionStorage.getItem('AUTH');

  constructor(public router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth === '') {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}

