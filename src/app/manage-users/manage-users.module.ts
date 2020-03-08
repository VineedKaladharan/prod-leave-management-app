import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageUsersRoutingModule } from './manage-users-routing.module';
import { AdminUiComponent } from './admin-ui/admin-ui.component';
import { RouterModule } from '@angular/router';
import { routes } from './manage-users-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminUiComponent],
  imports: [
    CommonModule,
    ManageUsersRoutingModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class ManageUsersModule { }
