import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ManagerRoutingModule } from "./manager-routing.module";
import { ManagerComponent } from "./manager/manager.component";
import { routes } from "./manager-routing.module";
import { RouterModule } from "@angular/router";
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [ManagerComponent],
  imports: [CommonModule, ManagerRoutingModule, RouterModule.forChild(routes)]
})
export class ManagerModule {}
