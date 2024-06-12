import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private apiUrl = 'http://localhost:3000/loans'; // URL de tu API backend
  private loansSubject = new BehaviorSubject<any[]>([]);
  loans$ = this.loansSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadLoans();
  }

  private loadLoans(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (loans) => this.loansSubject.next(loans),
      (error) => console.error('Error loading loans', error)
    );
  }

  getLoans(): Observable<any[]> {
    return this.loans$;
  }

  getLoanById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addLoan(loan: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, loan).pipe(
      tap(() => this.loadLoans()) // Reload the loans list after adding a loan
    );
  }

  updateLoan(id: string, loan: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, loan).pipe(
      tap(() => this.loadLoans()) // Reload the loans list after updating a loan
    );
  }

  deleteLoan(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.loadLoans()) // Reload the loans list after deleting a loan
    );
  }
}
