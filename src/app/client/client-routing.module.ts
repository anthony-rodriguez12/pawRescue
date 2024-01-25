import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SponsoringComponent } from './sponsoring/page/sponsoring.component';
import { AdoptionComponent } from './adoption/adoption.component';
import { FormComponent } from './sponsoring/form/form.component';
import { DonationsComponent } from './donations/donations.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'adoption',
    component: AdoptionComponent,
  },
  {
    path: 'help-us',
    children: [
      {
        path: 'donations',
        component: DonationsComponent,
      },
      {
        path: 'temporary-home',
        component: FormComponent,
      },
      {
        path: 'rescue',
        component: FormComponent,
      },
    ],
  },
  {
    path: 'programs',
    children: [
      {
        path: 'sponsors',
        component: SponsoringComponent,
      },
      {
        path: 'form',
        component: FormComponent,
      },
    ],
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },

  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
