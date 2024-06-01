import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Download } from './download.entity';
import { CategoryBook } from './categorybook.entity';
import { Loan } from './loan.entity';

@Entity('book')
export class Book {
  @PrimaryGeneratedColumn()
  idbooks: number;

  @Column()
  editorial: string;

  @Column()
  description: string;

  @Column()
  title: string;

  @Column()
  year: number;

  @Column()
  pdfink: string;

  @Column()
  nameauthor: string;

  @Column()
  lastnameauthor: string;

  @Column()
  image: string;

  @Column()
  bookstatus: boolean;

  @OneToMany(() => Download, download => download.book)
  downloads: Download[];

  @OneToMany(() => Loan, loan => loan.book)
  loans: Loan[];

  @ManyToMany(() => CategoryBook, categoryBook => categoryBook.books)
  @JoinTable()
  categories: CategoryBook[];
}
