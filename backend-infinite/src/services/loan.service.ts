import { Injectable } from '@nestjs/common';
import { LoanProvider } from '../providers/loan.providers';
import { LoanEntity } from 'src/entities/loan.entity';

@Injectable()
export class LoanService {
  constructor(private readonly loanProvider: LoanProvider) {}

  // Método para obtener todos los préstamos
  async getAllLoans(): Promise<LoanEntity[]> {
    return this.loanProvider.getAllLoans();
  }

  // Método para obtener un préstamo por su id
  async getLoanById(id: number): Promise<LoanEntity | undefined> {
    return this.loanProvider.getLoanById(id);
  }

  // Método para crear un nuevo préstamo
  async createLoan(loan: LoanEntity): Promise<LoanEntity> {
    return this.loanProvider.createLoan(loan);
  }

  // Método para actualizar un préstamo existente
  async updateLoan(id: number, loan: LoanEntity): Promise<LoanEntity> {
    return this.loanProvider.updateLoan(id, loan);
  }

  // Método para eliminar un préstamo
  async deleteLoan(id: number): Promise<void> {
    return this.loanProvider.deleteLoan(id);
  }
}
