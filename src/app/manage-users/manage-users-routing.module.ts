import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AdminUiComponent } from './admin-ui/admin-ui.component';
import { AuthGuardService } from '../services/auth.service';


export const routes: Routes = [
  { path: '', component: AdminUiComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageUsersRoutingModule { }
