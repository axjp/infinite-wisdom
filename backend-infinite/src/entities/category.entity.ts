import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CategoryBook } from './categorybook.entity';

@Entity('category')
export class Category {
  @PrimaryGeneratedColumn()
  idcategory: number;

  @Column()
  category: string;

  @OneToMany(() => CategoryBook, categoryBook => categoryBook.category)
  categoryBooks: CategoryBook[];
}
