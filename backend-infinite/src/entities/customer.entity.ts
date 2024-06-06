import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { GenderEntity } from "./gender.entity";
import { CityEntity } from "./city.entity";
import { LoginEntity } from "./login.entity";

@Entity('customer')
export class CustomerEntity {
    @PrimaryGeneratedColumn({ type: 'integer', name: 'idcustomer', comment: 'ID del cliente' })
    idCustomer: number;

    @ManyToOne(() => GenderEntity, gender => gender.idGender, { onDelete: 'CASCADE' })
    idGender: GenderEntity;

    @ManyToOne(() => CityEntity, city => city.idCity, { onDelete: 'CASCADE' })
    idCity: CityEntity;

    @ManyToOne(() => LoginEntity, login => login.idLogin, { onDelete: 'CASCADE' })
    idLogin: LoginEntity;

    @Column({ type: 'varchar', length: 20, name: 'name', comment: 'Nombre del cliente' })
    name: string;

    @Column({ type: 'varchar', length: 20, name: 'lastname', comment: 'Apellido del cliente' })
    lastname: string;

    @Column({ type: 'varchar', length: 20, name: 'email', comment: 'Correo electrónico del cliente' })
    email: string;

    @Column({ type: 'date', name: 'birthday', comment: 'Fecha de nacimiento del cliente' })
    birthday: Date;

    @Column({ type: 'integer', name: 'password', comment: 'Contraseña del cliente' })
    password: number;

    @Column({ type: 'boolean', name: 'state', comment: 'Estado del cliente' })
    state: boolean;
}
