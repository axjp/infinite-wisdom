import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Customer } from './customer.entity';
import { Book } from './book.entity';

@Entity('loan')
export class Loan {
  @PrimaryGeneratedColumn({ name: 'idloan' })
  idloan: number;

  @Column({ type: 'date' })
  loan_date: Date;

  @Column({ type: 'date' })
  return_date: Date;

  @Column({ type: 'varchar', length: 255 })
  comments: string;

  @Column({ type: 'int' })
  loan_amount: number;

  @Column({ type: 'boolean' })
  is_approved: boolean;

  @ManyToOne(() => Customer, (customer) => customer.loans)
  @JoinColumn({ name: 'idcustomer' })
  customer: Customer;

  @ManyToOne(() => Book, (book) => book.loans)
  @JoinColumn({ name: 'idbooks' })
  book: Book;
}
