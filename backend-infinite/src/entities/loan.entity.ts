import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { BookEntity } from "./book.entity";
import { CustomerEntity } from "./customer.entity";

@Entity('loan')
export class LoanEntity {
    @PrimaryGeneratedColumn({ type: 'integer', name: 'idloan', comment: 'ID del préstamo' })
    idLoan: number;

    @ManyToOne(() => BookEntity, book => book.idBook, { onDelete: 'CASCADE' })
    idBook: BookEntity;

    @ManyToOne(() => CustomerEntity, user => user.idCustomer, { onDelete: 'CASCADE' })
    idUser: CustomerEntity;

    @Column({ type: 'varchar', length: 50, name: 'email', comment: 'Correo electrónico del usuario' })
    email: string;

    @Column({ type: 'date', name: 'loan_date', comment: 'Fecha del préstamo' })
    loanDate: Date;

    @Column({ type: 'integer', name: 'day_past_due', comment: 'Días de prestamo(maximo 10 días)'})
    return_date: number;

    @Column({ type: 'boolean', name: 'state', comment: 'Estado del préstamo' })
    state: boolean;
}
