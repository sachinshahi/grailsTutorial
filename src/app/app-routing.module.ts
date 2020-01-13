import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'basicApplicationStack'}
  {
    path: 'basicApplicationStack',
    loadChildren: () => import('./basic-application-stack/basic-application-stack-routing.module').then(m => {
      return m.BasicApplicationStackRoutingModule;
    })
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
