import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinColumn, JoinTable } from "typeorm";
import { CategoryEntity } from "./category.entity";

@Entity('books')
export class BookEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'id_book' })
    idBook: number;

    @Column({ type: 'varchar', length: 50, name: 'editorial', comment: 'Editorial del libro' })
    editorial: string;

    @Column({ type: 'varchar', length: 100, name: 'description', comment: 'Descripción del libro' })
    description: string;

    @Column({ type: 'varchar', length: 30, name: 'title', comment: 'Título del libro' })
    title: string;

    @Column({ type: 'date', name: 'year_publication', comment: 'Año de publicación' })
    yearPublication: Date;

    @Column({ type: 'varchar', length: 100, name: 'pdf_link', comment: 'Enlace al PDF del libro' })
    pdfLink: string;

    @Column({ type: 'varchar', length: 30, name: 'name_author', comment: 'Nombre del autor' })
    nameAuthor: string;

    @Column({ type: 'varchar', length: 30, name: 'lastname_author', comment: 'Apellido del autor' })
    lastnameAuthor: string;

    @Column({ type: 'bytea', name: 'image', comment: 'Imagen del libro' })
    image: Buffer;

    @Column({ type: 'boolean', name: 'book_status', comment: 'Estado del libro' })
    bookStatus: boolean;

    @ManyToMany(() => CategoryEntity)
    @JoinTable({name:'book_category',
    joinColumn:{name:'book_id', foreignKeyConstraintName:'book_category_book_id_foreign_key'},
    inverseJoinColumn:{name:'category_id', foreignKeyConstraintName:'book_category_category_id_foreign_key'}})
    categories: CategoryEntity[];
 
}
