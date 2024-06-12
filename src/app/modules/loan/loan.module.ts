import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoanListComponent } from '../loan/loan-list/loan-list.component';
import { LoanComponent } from '../loan/component/loan.component';
import { LoanService } from '../../service/loan.service';

@NgModule({
  declarations: [
    LoanListComponent,
    LoanComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoanService],
  exports: [
    LoanListComponent,
    LoanComponent
  ]
})
export class LoanModule { }
