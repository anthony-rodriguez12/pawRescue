import { NgModule } from '@angular/core';
import { PanelComponent } from './panel/panel.component';
import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    PanelComponent,
    LoginComponent,   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    SharedModule,
    
  ]
})
export class AdminModule { }

