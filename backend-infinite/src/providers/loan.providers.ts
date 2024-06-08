import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoanEntity } from '../entities/loan.entity';

@Injectable()
export class LoanProvider {
  constructor(
    @InjectRepository(LoanEntity)
    private readonly loanRepository: Repository<LoanEntity>,
  ) {}

  // Método para obtener todos los préstamos
  async getAllLoans(): Promise<LoanEntity[]> {
    return this.loanRepository.find();
  }

  // Método para obtener un préstamo por su id
  async getLoanById(id: number): Promise<LoanEntity | undefined> {
    return this.loanRepository.findOne({ where: { idLoan: id } });
  }
  // Método para crear un nuevo préstamo
  async createLoan(loan: LoanEntity): Promise<LoanEntity> {
    return this.loanRepository.save(loan);
  }

  // Método para actualizar un préstamo existente
  async updateLoan(id: number, loan: LoanEntity): Promise<LoanEntity> {
    return this.loanRepository.save({ id, ...loan });
  }

  // Método para eliminar un préstamo
  async deleteLoan(id: number): Promise<void> {
    await this.loanRepository.delete(id);
  }
}
