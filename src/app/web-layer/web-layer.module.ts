import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebLayerRoutingModule } from './web-layer-routing.module';
import { WebLayerComponent } from './web-layer/web-layer.component';

@NgModule({
  declarations: [WebLayerComponent],
  imports: [
    CommonModule,
    WebLayerRoutingModule
  ]
})
export class WebLayerModule { }
