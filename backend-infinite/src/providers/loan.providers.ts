import { DataSource } from 'typeorm';
import { Loan } from '../database/entities/loan.entity';

export const loanProviders = [
  {
    provide: 'LOAN_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Loan),
    inject: ['DATA_SOURCE'],
  },
];
