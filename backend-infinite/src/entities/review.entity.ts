import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Customer } from './customer.entity';
import { Book } from './book.entity';

@Entity('reviews')
export class Review {
  @PrimaryGeneratedColumn({ name: 'idreview' })
  idreview: number;

  @Column({ name: 'reviewrating', type: 'int' })
  rating: number;

  @Column({ name: 'reviewcomment', type: 'text' })
  comment: string;

  @Column({ name: 'isapproved', type: 'boolean' })
  is_approved: boolean;

  @ManyToOne(() => Customer, (customer) => customer.reviews)
  @JoinColumn({ name: 'idcustomer' })
  customer: Customer;

  @ManyToOne(() => Book, (book) => book.reviews)
  @JoinColumn({ name: 'idbooks' })
  book: Book;
}