import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicApplicationStackComponent} from './basic-application-stack/basic-application-stack.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'basic'},
  {path: 'basic', component: BasicApplicationStackComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicApplicationStackRoutingModule { }
