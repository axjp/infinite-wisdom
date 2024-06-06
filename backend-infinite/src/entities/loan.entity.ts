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

    @Column({ type: 'varchar', length: 20, name: 'name', comment: 'Nombre del usuario' })
    name: string;

    @Column({ type: 'varchar', length: 20, name: 'lastname', comment: 'Apellido del usuario' })
    lastname: string;

    @Column({ type: 'varchar', length: 20, name: 'email', comment: 'Correo electrónico del usuario' })
    email: string;

    @Column({ type: 'date', name: 'loan_date', comment: 'Fecha del préstamo' })
    loanDate: Date;

    @Column({ type: 'date', name: 'return_date', comment: 'Fecha de devolución' })
    returnDate: Date;

    @Column({ type: 'integer', name: 'day_past_due', comment: 'Días de atraso' })
    dayPastDue: number;

    @Column({ type: 'boolean', name: 'state', comment: 'Estado del préstamo' })
    state: boolean;
}
