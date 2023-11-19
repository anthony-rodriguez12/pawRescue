import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialPageComponent } from './shared/initial-page/initial-page.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'pawstorescue',
    component: InitialPageComponent,
    loadChildren: () => import('./client/client.module').then(m => m.ClientModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'pawstorescue' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
