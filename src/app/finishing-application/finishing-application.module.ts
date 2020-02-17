import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinishingApplicationRoutingModule } from './finishing-application-routing.module';
import { FinishingApplicationComponent } from './finishing-application/finishing-application.component';

@NgModule({
  declarations: [FinishingApplicationComponent],
  imports: [
    CommonModule,
    FinishingApplicationRoutingModule
  ]
})
export class FinishingApplicationModule { }
