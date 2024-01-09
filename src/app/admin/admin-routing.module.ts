import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './panel/panel.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {
    path: 'panel',
    component: PanelComponent
  },
  {
    path: 'PetModule',
    loadChildren: () =>
      import('./Components/component-animal/pet.module').then((m) => m.PetModule),
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
