import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CategoryBook } from './categorybook.entity';

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn({ name:'idbooks' })
  idbooks: number;

  @Column({ type: 'varchar', length: 20 })
  editorial: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'varchar', length: 50 })
  title: string;

  @Column({ type: 'int' })
  year: number;

  @Column({ type: 'varchar', length: 100 })
  pdfLink: string;

  @Column({ type: 'varchar', length: 50 })
  nameAuthor: string;

  @Column({ type: 'varchar', length: 50 })
  lastNameAuthor: string;

  @Column({ type: 'varchar', length: 100 })
  image: string;

  @Column({ type: 'boolean' })
  bookStatus: boolean;

  @ManyToOne(() => CategoryBook, (categoryBook) => categoryBook.books)
  @JoinColumn({ name: 'idcategorybook' })
  categoryBook: CategoryBook;
  loans: any;
  reviews: any;
  downloads: any;
}
