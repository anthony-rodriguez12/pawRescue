import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderLoginComponent } from './header/header-login/header-login.component';
import { AppRoutingModule } from '../app-routing.module';




@NgModule({
  declarations: [
    MenuComponent,
    InitialPageComponent,
    FooterComponent,
    HeaderLoginComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    MenuComponent,
    InitialPageComponent,
    FooterComponent, 
    HeaderLoginComponent
  ]
})
export class SharedModule { }
