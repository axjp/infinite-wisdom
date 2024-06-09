import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanListComponent } from './component/loan-list/loan-list.component';
import { LoanComponent } from './component/loan/loan.component';

const routes: Routes = [
  { path: 'loan-list', component: LoanListComponent },
  { path: 'loans', component: LoanComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanRoutingModule { }
