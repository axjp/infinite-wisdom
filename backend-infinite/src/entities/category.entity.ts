import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { BookEntity } from "./book.entity";

@Entity('categories')
export class CategoryEntity {
    @PrimaryGeneratedColumn('uuid')
    idCategory: number;

    @Column({ type: 'varchar', length: 20, name: 'category', comment: 'Nombre de la categoría' })
    category: string;

    @ManyToMany(() => BookEntity, (book) => book.categories)
    categories: CategoryEntity[];
}
