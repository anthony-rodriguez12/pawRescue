import { NgModule } from '@angular/core';

import { ClientRoutingModule } from './client-routing.module';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SponsoringComponent } from './sponsoring/sponsoring.component';
import { AdoptionComponent } from './adoption/adoption.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContactUsComponent,
    SponsoringComponent,
    AdoptionComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ],
})
export class ClientModule { }
