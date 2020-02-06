import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GormDataManagementRoutingModule } from './gorm-data-management-routing.module';
import { GormDataManagementComponent } from './gorm-data-management/gorm-data-management.component';

@NgModule({
  declarations: [GormDataManagementComponent],
  imports: [
    CommonModule,
    GormDataManagementRoutingModule
  ]
})
export class GormDataManagementModule { }
