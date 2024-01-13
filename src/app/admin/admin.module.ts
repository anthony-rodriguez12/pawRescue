import { NgModule } from '@angular/core';
import { PanelComponent } from './panel/panel.component';
import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginService } from '../shared/services/login.service';
import { LoginGuard } from './guards/login.guard';

@NgModule({
  declarations: [PanelComponent, LoginComponent, HomeComponent],
  providers: [AuthGuard, LoginGuard, LoginService],
  imports: [CommonModule, AdminRoutingModule, MaterialModule, SharedModule],
})
export class AdminModule {}
