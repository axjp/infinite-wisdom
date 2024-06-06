import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Loan } from '../entities/loan.entity';

@Injectable()
export class LoanService {
  constructor(
    @InjectRepository(Loan)
    private loanRepository: Repository<Loan>,
  ) {}

  findAll(): Promise<Loan[]> {
    return this.loanRepository.find();
  }

  findOne(id: number): Promise<Loan> {
    return this.loanRepository.findOne({ where: { idloan: id } });
  }

  create(loan: Loan): Promise<Loan> {
    return this.loanRepository.save(loan);
  }

  async update(id: number, loan: Loan): Promise<Loan> {
    await this.loanRepository.update(id, loan);
    return this.loanRepository.findOne({ where: { idloan: id } });
  }

  async remove(id: number): Promise<void> {
    await this.loanRepository.delete(id);
  }
}
