import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoanService } from '../../../service/loan/loan.service';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})
export class LoanListComponent implements OnInit {
  loanForm: FormGroup;

  constructor(private fb: FormBuilder, private loanService: LoanService) {
    this.loanForm = this.fb.group({
      loan_date: ['', Validators.required],
      return_date: ['', [Validators.required, Validators.min(1), Validators.max(10)]],
      email: ['', [Validators.required, Validators.email]],
      state: [{ value: false, disabled: true }]
    });

    this.loanForm.get('loan_date')?.valueChanges.subscribe(() => this.updateState());
    this.loanForm.get('return_date')?.valueChanges.subscribe(() => this.updateState());
  }

  ngOnInit(): void {}

  updateState(): void {
    const loanDate = new Date(this.loanForm.get('loan_date')?.value);
    const returnDays = this.loanForm.get('return_date')?.value;

    if (loanDate && returnDays) {
      const returnDate = new Date(loanDate);
      returnDate.setDate(loanDate.getDate() + returnDays);

      const currentDate = new Date();
      const isActive = currentDate <= returnDate;

      this.loanForm.patchValue({
        state: isActive
      }, { emitEvent: false });
    }
  }

  onSubmit(): void {
    if (this.loanForm.valid) {
      const formData = {
        loan_date: this.loanForm.get('loan_date')?.value,
        return_date: this.loanForm.get('return_date')?.value,
        email: this.loanForm.get('email')?.value,
        state: this.loanForm.get('state')?.value
      };
      this.loanService.addLoan(formData);
    }
  }
}
