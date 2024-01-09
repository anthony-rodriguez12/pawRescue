import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PetEditComponent } from './pages/pet-edit/pet-edit.component';
import { PetAddComponent } from './pages/pet-add/pet-add.component';
import { PetListComponent } from './pages/pet-list/pet-list.component';



const routes: Routes = [

  {
    path: 'add',
    component: PetAddComponent,

  },
  {
    path: 'edit/:id',
    component: PetEditComponent,

  },
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
