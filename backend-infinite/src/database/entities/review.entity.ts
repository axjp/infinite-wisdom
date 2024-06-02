import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Customer } from './customer.entity';
import { Book } from './book.entity';

@Entity('review')
export class Review {
  @PrimaryGeneratedColumn()
  idreview: number;

  @Column({ type: 'text' })
  review: string;

  @Column({ type: 'int' })
  rating: number;

  @ManyToOne(() => Customer, (customer) => customer.reviews)
  @JoinColumn({ name: 'idcustomer' })
  customer: Customer;

  @ManyToOne(() => Book, (book) => book.reviews)
  @JoinColumn({ name: 'idbooks' })
  book: Book;
}
