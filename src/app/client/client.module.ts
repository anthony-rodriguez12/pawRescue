import { NgModule } from '@angular/core';

import { ClientRoutingModule } from './client-routing.module';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ],
})
export class ClientModule { }
