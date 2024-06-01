import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisteradminRoutingModule } from './registeradmin-routing.module';
import { RegisteradminComponent } from './component/registeradmin.component';


@NgModule({
  declarations: [
    RegisteradminComponent
  ],
  imports: [
    CommonModule,
    RegisteradminRoutingModule,
    ReactiveFormsModule
  ]
})
export class RegisteradminModule { }
