import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Customer } from './customer.entity';
import { Book } from './book.entity';

@Entity('downloads')
export class Download {
  @PrimaryGeneratedColumn({ name:'iddownloads' })
  iddownloads: number;

  @Column({ type: 'date' })
  download_date: Date;

  @ManyToOne(() => Customer, (customer) => customer.downloads)
  @JoinColumn({ name: 'idcustomer' })
  customer: Customer;

  @ManyToOne(() => Book, (book) => book.downloads)
  @JoinColumn({ name: 'idbooks' })
  book: Book;
}
