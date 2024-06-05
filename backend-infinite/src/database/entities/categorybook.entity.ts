import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Book } from './book.entity';
import { Category } from './category.entity';

@Entity('categorybook')
export class CategoryBook {
  @PrimaryGeneratedColumn({ name: 'idcategorybook' })
  idcategorybook: number;

  @ManyToOne(() => Book, (book) => book.categoryBooks)
  @JoinColumn({ name: 'idbooks' })
  book: Book;

  @ManyToOne(() => Category, (category) => category.categoryBooks)
  @JoinColumn({ name: 'idcategory' })
  category: Category;
}
