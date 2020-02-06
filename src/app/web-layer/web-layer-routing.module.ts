import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WebLayerComponent} from './web-layer/web-layer.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'web-layer'},
  {path: 'web-layer', component: WebLayerComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebLayerRoutingModule { }
