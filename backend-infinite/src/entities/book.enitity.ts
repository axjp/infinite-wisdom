import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@Entity()
export class BookEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    name: string;
    @Column({ type: 'varchar', name: 'editorial', length: '50', comment: 'Nombres del editorial' })
    editorial: string;

    @Column({ type: 'varchar', name: 'description', length: '100', comment: 'Descripcion del libro' })
    description: string;

    @Column({ type: 'varchar', name: 'tittle', length: '40', comment: 'Titulo del libro' })
    tittle: string;

    


  
}