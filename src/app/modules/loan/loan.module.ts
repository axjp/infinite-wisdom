import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoanListComponent } from './component/loan-list/loan-list.component';
import { LoanComponent } from './component/loan/loan.component';
import { LoanRoutingModule } from './loan-routing.module';
import { LoanService } from './services/loan.service';

@NgModule({
  declarations: [
    LoanListComponent,
    LoanComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoanRoutingModule
  ],
  providers: [LoanService]
})
export class LoanModule { }
