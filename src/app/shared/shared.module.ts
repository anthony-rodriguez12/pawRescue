import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderLoginComponent } from './header/header-login/header-login.component';
import { ClientRoutingModule } from '../client/client-routing.module';
import { MaterialModule } from '../material/material.module';
import { ButtonComponent } from './button/button.component';
import { ModalComponent } from './modal/modal.component';




@NgModule({
  declarations: [
    MenuComponent,
    InitialPageComponent,
    FooterComponent,
    HeaderLoginComponent,
    ButtonComponent,
    ModalComponent,
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
    ButtonComponent
  ]
})
export class SharedModule { }
