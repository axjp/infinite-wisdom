import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Category } from './category.entity';
import { Book } from './book.entity';

@Entity('categorybook')
export class CategoryBook {
  @PrimaryGeneratedColumn()
  idcategorybook: number;

  @ManyToOne(() => Category, category => category.categoryBooks)
  @JoinColumn({ name: 'idcategory' })
  category: Category;

  @ManyToOne(() => Book, book => book.categories)
  @JoinColumn({ name: 'idbooks' })
  book: Book;
}
