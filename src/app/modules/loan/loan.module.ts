import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { LoanRoutingModule } from './loan-routing.module';
import { LoanComponent } from './component/loan.component';
import { ComponentListComponent } from './component-list/component-list.component';


@NgModule({
  declarations: [
    LoanComponent,
    ComponentListComponent
  ],
  imports: [
    CommonModule,
    LoanRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoanModule { }
