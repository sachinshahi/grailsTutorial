import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogicLayerRoutingModule } from './logic-layer-routing.module';
import { LogicLayerComponent } from './logic-layer/logic-layer.component';

@NgModule({
  declarations: [LogicLayerComponent],
  imports: [
    CommonModule,
    LogicLayerRoutingModule
  ]
})
export class LogicLayerModule { }
