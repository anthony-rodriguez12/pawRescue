import { NgModule } from '@angular/core';

import { ClientRoutingModule } from './client-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    ClientRoutingModule
  ],
})
export class ClientModule { }
