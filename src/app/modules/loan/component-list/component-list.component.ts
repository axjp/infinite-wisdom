import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css']
})
export class ComponentListComponent implements OnInit {
  loanForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loanForm = this.fb.group({
      idloan: ['', Validators.required],
      idbook: ['', Validators.required],
      idcustomer: ['', Validators.required],
      loan_date: ['', Validators.required],
      return_days: ['', [Validators.required, Validators.min(1)]],
      return_date: [{ value: '', disabled: true }, Validators.required],
      email: ['', [Validators.required, Validators.email]],
      state: [{ value: false, disabled: true }]
    });

    this.loanForm.get('loan_date')?.valueChanges.subscribe(() => this.updateReturnDate());
    this.loanForm.get('return_days')?.valueChanges.subscribe(() => this.updateReturnDate());
  }

  ngOnInit(): void {}

  updateReturnDate(): void {
    const loanDate = new Date(this.loanForm.get('loan_date')?.value);
    const returnDays = this.loanForm.get('return_days')?.value;

    if (loanDate && returnDays) {
      const returnDate = new Date(loanDate);
      returnDate.setDate(loanDate.getDate() + returnDays);

      this.loanForm.patchValue({
        return_date: returnDate.toISOString().split('T')[0]
      });

      this.updateState(returnDate);
    }
  }

  updateState(returnDate: Date): void {
    const currentDate = new Date();
    const isActive = currentDate <= returnDate;

    this.loanForm.patchValue({
      state: isActive
    }, { emitEvent: false });
  }

  onSubmit(): void {
    if (this.loanForm.valid) {
      const formData = {
        ...this.loanForm.getRawValue(),
        state: this.loanForm.get('state')?.value
      };
      console.log(formData);
    }
  }
}
