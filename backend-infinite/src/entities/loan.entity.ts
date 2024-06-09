import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Book } from "./book.entity";
import { Customer } from "./customer.entity";

@Entity('loan')
export class LoanEntity {
    @PrimaryGeneratedColumn({ type: 'integer', name: 'idloan', comment: 'ID del préstamo' })
    idLoan: number;

    @ManyToOne(() => Book, book => book.idbooks, { onDelete: 'CASCADE' })
    idBook: Book;

    @ManyToOne(() => Customer, user => user.idcustomer, { onDelete: 'CASCADE' })
    idUser: Customer;

    @Column({ type: 'varchar', length: 50, name: 'email', comment: 'Correo electrónico del usuario' })
    email: string;

    @Column({ type: 'date', name: 'loan_date', comment: 'Fecha del préstamo' })
    loanDate: Date;

    @Column({ type: 'integer', name: 'day_past_due', comment: 'Días de prestamo(maximo 10 días)'})
    return_date: number;

    @Column({ type: 'boolean', name: 'state', comment: 'Estado del préstamo' })
    state: boolean;
  customers: any;
  book: any;
}
