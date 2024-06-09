import { Entity, PrimaryGeneratedColumn, Column,  OneToMany } from 'typeorm';
import { CategoryBook } from './categorybook.entity';
import { LoanEntity } from './loan.entity';
import { Review } from './review.entity';
import { Download } from './download.entity';

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn({ name: 'idbooks' })
  idbooks: number;

  @Column({ name: 'booktitle', type: 'varchar', length: 255 })
  title: string;

  @Column({ name: 'bookauthor', type: 'varchar', length: 255 })
  author: string;

  @Column({ name: 'publication_year', type: 'int' })
  year: number;

  @Column({ name: 'bookdescription', type: 'text' })
  description: string;

  @Column({ name: 'bookpublisher', type: 'varchar', length: 255 })
  publisher: string;

  @Column({ name: 'isbnnumber', type: 'varchar', length: 20 })
  isbn: string;

  @OneToMany(() => CategoryBook, (categoryBook) => categoryBook.book)
  categoryBooks: CategoryBook[];

  @OneToMany(() => LoanEntity, (loan) => loan.book)
  loans: LoanEntity[];

  @OneToMany(() => Review, (review) => review.book)
  reviews: Review[];

  @OneToMany(() => Download, (download) => download.book)
  downloads: Download[];
}
