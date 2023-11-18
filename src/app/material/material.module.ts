import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  exports: [
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ]
})
export class MaterialModule { }
