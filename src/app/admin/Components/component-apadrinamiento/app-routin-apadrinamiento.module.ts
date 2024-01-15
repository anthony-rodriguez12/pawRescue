import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ApadrinamientoListComponent } from './pages/apadrinamiento-list/apadrinamiento-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: ApadrinamientoListComponent
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
export class AppRoutinApadrinamientoModule { }
