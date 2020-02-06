import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicApplicationStackRoutingModule } from './basic-application-stack-routing.module';
import {BasicApplicationStackComponent} from './basic-application-stack/basic-application-stack.component';

@NgModule({
  declarations: [BasicApplicationStackComponent],
  imports: [
    CommonModule,
    BasicApplicationStackRoutingModule
  ],
  exports: []
})
export class BasicApplicationStackModule { }

