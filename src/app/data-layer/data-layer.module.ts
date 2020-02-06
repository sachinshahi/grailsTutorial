import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataLayerRoutingModule } from './data-layer-routing.module';
import { DataLayerComponent } from './data-layer/data-layer.component';

@NgModule({
  declarations: [DataLayerComponent],
  imports: [
    CommonModule,
    DataLayerRoutingModule
  ]
})
export class DataLayerModule { }
