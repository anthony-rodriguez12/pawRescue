import { NgModule } from '@angular/core';
import { PanelComponent } from './panel/panel.component';
import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    PanelComponent,
    LoginComponent
  ],
  imports: [
    AdminRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class AdminModule { }

