import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingPetModule } from './app-routing-pet.module';
import { MaterialModule } from 'src/app/material/material.module';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { PetFormComponent } from './animal-form/pet-form.component';
import { PetAddComponent } from './pages/pet-add/pet-add.component';
import { PetEditComponent } from './pages/pet-edit/pet-edit.component';
import { CustomMatPaginatorIntl, PetListComponent } from './pages/pet-list/pet-list.component';




@NgModule({
  declarations: [
    PetListComponent,
    PetEditComponent,
    PetAddComponent,
    PetFormComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingPetModule,
    MaterialModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl }
  ]
})
export class PetModule { }
