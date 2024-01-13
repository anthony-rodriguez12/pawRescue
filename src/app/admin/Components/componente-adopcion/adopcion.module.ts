import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdopcionEditComponent } from './pages/adopcion-edit/adopcion-edit.component';
import { AdopcionAddComponent } from './pages/adopcion-add/adopcion-add.component';
import { AdopcionListComponent } from './pages/adopcion-list/adopcion-list.component';
import { MaterialModule } from 'src/app/material/material.module';
import { AppRoutingAdopcionModule } from './app-routing-adopcion.module';
import { AdopcionFormComponent } from './adopcion-form/adopcion-form.component';



@NgModule({
  declarations: [
    AdopcionListComponent,
    AdopcionEditComponent,
    AdopcionAddComponent,
    AdopcionFormComponent
  ],
  imports: [
    CommonModule,
    AppRoutingAdopcionModule,
    MaterialModule
  ]
})
export class AdopcionModule { }
