import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PetListComponent } from './pages/pet-list/pet-list.component';



const routes: Routes = [
  {
    path: 'list',
    component: PetListComponent
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
export class AppRoutingPetModule { }
