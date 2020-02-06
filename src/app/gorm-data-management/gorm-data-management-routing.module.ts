import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GormDataManagementComponent} from './gorm-data-management/gorm-data-management.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'gorm-data-management'},
  {path: 'gorm-data-management', component: GormDataManagementComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GormDataManagementRoutingModule { }
