import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { CustomerEntity } from "./customer.entity";

@Entity('administrator')
export class AdministratorEntity {
    @PrimaryGeneratedColumn({ type: 'integer', name: 'idadministrator', comment: 'ID del administrador' })
    idAdministrator: number;

    @ManyToOne(() => CustomerEntity, user => user.idCustomer, { onDelete: 'CASCADE' })
    idUser: CustomerEntity;

    @Column({ type: 'varchar', length: 20, name: 'name', comment: 'Nombre del administrador' })
    name: string;

    @Column({ type: 'varchar', length: 20, name: 'lastname', comment: 'Apellido del administrador' })
    lastname: string;

    @Column({ type: 'integer', name: 'password', comment: 'Contraseña del administrador' })
    password: number;

    @Column({ type: 'varchar', length: 20, name: 'email', comment: 'Correo electrónico del administrador' })
    email: string;

    @Column({ type: 'date', name: 'birthday', comment: 'Fecha de nacimiento del administrador' })
    birthday: Date;

    @Column({ type: 'boolean', name: 'state', comment: 'Estado del administrador' })
    state: boolean;
}
