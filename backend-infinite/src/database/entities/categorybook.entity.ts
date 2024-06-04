import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Category } from './category.entity';
import { Book } from './book.entity';

@Entity('categorybook')
export class CategoryBook {
  @PrimaryGeneratedColumn({name: 'idcategorybook'})
  idcategorybook: number;

  @ManyToOne(() => Category, (category) => category.idcategory)
  @JoinColumn({ name: 'idcategory' })
  category: Category;

  @ManyToOne(() => Book, (book) => book.idbooks)
  @JoinColumn({ name: 'idbooks' })
  books: Book;
}
