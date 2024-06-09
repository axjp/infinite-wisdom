import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface Loan {
  loan_date: string;
  return_date: number;
  email: string;
  state: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private loansSubject: BehaviorSubject<Loan[]> = new BehaviorSubject<Loan[]>([]);
  loans$: Observable<Loan[]> = this.loansSubject.asObservable();

  addLoan(loan: Loan): void {
    const loans = this.loansSubject.getValue();
    this.loansSubject.next([...loans, loan]);
  }
}
