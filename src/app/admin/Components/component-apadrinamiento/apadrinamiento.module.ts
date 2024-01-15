import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApadrinamientoFormComponent } from './apadrinamiento-form/apadrinamiento-form.component';
import { ApadrinamientoAddComponent } from './pages/apadrinamiento-add/apadrinamiento-add.component';
import { ApadrinamientoEditComponent } from './pages/apadrinamiento-edit/apadrinamiento-edit.component';
import { ApadrinamientoListComponent } from './pages/apadrinamiento-list/apadrinamiento-list.component';
import { MaterialModule } from 'src/app/material/material.module';
import { AppRoutinApadrinamientoModule } from './app-routin-apadrinamiento.module';



@NgModule({
  declarations: [ApadrinamientoFormComponent, ApadrinamientoAddComponent, ApadrinamientoEditComponent, ApadrinamientoListComponent],
  imports: [
    CommonModule,
    AppRoutinApadrinamientoModule,
    MaterialModule
  ]
})
export class ApadrinamientoModule { }
