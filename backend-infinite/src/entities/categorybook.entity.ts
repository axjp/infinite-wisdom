import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Book } from './book.enitity';
import { Category } from './category.entity';

@Entity('categorybook')
export class CategoryBook {
  @PrimaryGeneratedColumn()
  idcategorybook: number;

  @ManyToMany(() => Book, (book) => book.categoryBooks)
  books: Book[];

  @ManyToOne(() => Category, (category) => category.categoryBooks)
  @JoinColumn({ name: 'idcategory' })
  category: Category;
}
