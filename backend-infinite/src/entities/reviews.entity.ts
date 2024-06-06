import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { CustomerEntity } from "./customer.entity";
import { BookEntity } from "./book.entity";

@Entity('reviews')
export class ReviewEntity {
    @PrimaryGeneratedColumn({ type: 'integer', name: 'id_reviews', comment: 'ID de la reseña' })
    idReviews: number;

    @Column({ type: 'integer', name: 'reviewrating', comment: 'Calificación de la reseña' })
    reviewRating: number;

    @Column({ type: 'date', name: 'reviewdate', comment: 'Fecha de la reseña' })
    reviewDate: Date;

    @Column({ type: 'text', name: 'reviewcomment', comment: 'Comentario de la reseña' })
    reviewComment: string;

    @Column({ type: 'boolean', name: 'isapproved', comment: 'Reseña aprobada' })
    isApproved: boolean;

    @ManyToOne(() => CustomerEntity, customer => customer.idCustomer, { onDelete: 'CASCADE' })
    idCustomer: CustomerEntity;

    @ManyToOne(() => BookEntity, book => book.idBook, { onDelete: 'CASCADE' })
    idBooks: BookEntity;
}
