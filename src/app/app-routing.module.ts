import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'web-layer'},
  {
    path: 'basic', loadChildren: () => import('./basic-application-stack/basic-application-stack.module').then(m => {
      return m.BasicApplicationStackModule;
    })
  },
  {
    path: 'data-layer', loadChildren: () => import('./data-layer/data-layer.module').then(m => {
      return m.DataLayerModule;
    })
  },
  {
    path: 'web-layer', loadChildren: () => import('./web-layer/web-layer.module').then(m => {
      return m.WebLayerModule;
    })
  },
  {
    path: 'logic-layer', loadChildren: () => import('./logic-layer/logic-layer.module').then(m => {
      return m.LogicLayerModule;
    })
  },
  {
    path: 'gorm-data-management', loadChildren: () => import('./gorm-data-management/gorm-data-management.module').then(m => {
      return m.GormDataManagementModule;
    })
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
