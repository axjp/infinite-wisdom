import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Customer } from './customer.entity';
import { Book } from './book.entity';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Customer, customer => customer.reviews)
  customer: Customer;

  @ManyToOne(() => Book, book => book.reviews)
  book: Book;

  @Column()
  rating: number;

  @Column()
  reviewTitle: string;

  @Column()
  reviewContent: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
