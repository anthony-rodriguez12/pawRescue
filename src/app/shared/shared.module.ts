import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderLoginComponent } from './header/header-login/header-login.component';
import { ClientRoutingModule } from '../client/client-routing.module';
import { MaterialModule } from '../material/material.module';




@NgModule({
  declarations: [
    MenuComponent,
    InitialPageComponent,
    FooterComponent,
    HeaderLoginComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ClientRoutingModule
  ],
  exports: [
    MenuComponent,
    InitialPageComponent,
    FooterComponent, 
    HeaderLoginComponent,
  ]
})
export class SharedModule { }
