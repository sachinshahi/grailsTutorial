import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DataLayerComponent} from './data-layer/data-layer.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'data-layer'},
  {path: 'data-layer', component: DataLayerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataLayerRoutingModule { }
