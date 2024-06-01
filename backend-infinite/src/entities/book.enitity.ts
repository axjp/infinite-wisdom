import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Loan } from './loan.entity';
import { CategoryBook } from './categorybook.entity';

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn()
  idbooks: number;

  @Column({ type: 'varchar', length: 20 })
  editorial: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'date' })
  date: Date;

  @Column({ type: 'varchar', length: 20 })
  year: string;

  @Column({ type: 'varchar', length: 255 })
  pdfink: string;

  @Column({ type: 'varchar', length: 20 })
  nameauthor: string;

  @Column({ type: 'varchar', length: 20 })
  lastnameauthor: string;

  @Column({ type: 'varchar', length: 255 })
  image: string;

  @Column({ type: 'boolean' })
  bookstatus: boolean;

  @OneToMany(() => Loan, (loan) => loan.book)
  loans: Loan[];

  @ManyToMany(() => CategoryBook, (categoryBook) => categoryBook.books)
  @JoinTable({
    name: 'categorybook',
    joinColumn: { name: 'idbooks', referencedColumnName: 'idbooks' },
    inverseJoinColumn: { name: 'idcategorybook', referencedColumnName: 'idcategorybook' },
  })
  categoryBooks: CategoryBook[];
}
