import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Customer } from './customer.entity';
import { Book } from './book.entity';

@Entity('loans')
export class Loan {
  @PrimaryGeneratedColumn({ name: 'idloan' })
  idloan: number;

  @Column({ name: 'loandate', type: 'date' })
  loan_date: Date;

  @Column({ name: 'returndate', type: 'date' })
  return_date: Date;

  @Column({ name: 'loancomments', type: 'varchar', length: 255 })
  comments: string;

  @Column({ name: 'loanamount', type: 'int' })
  loan_amount: number;

  @Column({ name: 'isapproved', type: 'boolean' })
  is_approved: boolean;

  @ManyToOne(() => Customer, (customer) => customer.loans)
  @JoinColumn({ name: 'idcustomer' })
  customer: Customer;

  @ManyToOne(() => Book, (book) => book.loans)
  @JoinColumn({ name: 'idbooks' })
  book: Book;
}
