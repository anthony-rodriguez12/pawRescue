import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './panel/panel.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'PetModule',
    loadChildren: () =>
      import('./Components/component-animal/pet.module').then((m) => m.PetModule),
  },
  {
    path: 'Adopciones',
    loadChildren: () =>
      import('./Components/componente-adopcion/adopcion.module').then((m) => m.AdopcionModule),
  },

  {
    path: 'panel',
    component: PanelComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
