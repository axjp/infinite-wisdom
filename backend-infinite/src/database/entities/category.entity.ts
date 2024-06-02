import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('category')
export class Category {
  @PrimaryGeneratedColumn()
  idcategory: number;

  @Column({ type: 'varchar', length: 20 })
  category: string;
}
