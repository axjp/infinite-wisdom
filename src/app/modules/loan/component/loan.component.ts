import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoanService } from '../services/loan.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  loans$: Observable<any[]>;

  constructor(private loanService: LoanService) {
    this.loans$ = this.loanService.loans$;
  }

  ngOnInit(): void {}
}
