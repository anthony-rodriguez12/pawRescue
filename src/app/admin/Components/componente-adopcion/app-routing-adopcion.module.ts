import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdopcionListComponent } from './pages/adopcion-list/adopcion-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: AdopcionListComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingAdopcionModule { }
