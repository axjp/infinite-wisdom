import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CategoryBook } from './categorybook.entity';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn({ name: 'idcategory' })
  idcategory: number;

  @Column({ name: 'categoryname', type: 'varchar', length: 255 })
  category: string;

  @OneToMany(() => CategoryBook, (categoryBook) => categoryBook.category)
  categoryBooks: CategoryBook[];
}
