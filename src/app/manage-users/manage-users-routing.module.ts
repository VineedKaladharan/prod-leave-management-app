import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminUiComponent } from './admin-ui/admin-ui.component';


export const routes: Routes = [
  { path: '', component: AdminUiComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageUsersRoutingModule { }
