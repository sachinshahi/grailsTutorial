import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DataLayerComponent} from '../data-layer/data-layer/data-layer.component';
import {LogicLayerComponent} from './logic-layer/logic-layer.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'logic-layer'},
  {path: 'logic-layer', component: LogicLayerComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogicLayerRoutingModule { }
