import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicApplicationStackComponent} from './basic-application-stack/basic-application-stack.component';

const routes: Routes = [
  {path: '', component: BasicApplicationStackComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicApplicationStackRoutingModule { }
