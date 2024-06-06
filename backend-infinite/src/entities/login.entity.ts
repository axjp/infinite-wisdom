import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { RoleEntity } from "./roles.entity";

@Entity('login')
export class LoginEntity {
    @PrimaryGeneratedColumn({ type: 'integer', name: 'idlogin', comment: 'ID del login' })
    idLogin: number;

    @ManyToOne(() => RoleEntity, role => role.idRol, { onDelete: 'CASCADE' })
    idRol: RoleEntity;

    @Column({ type: 'varchar', length: 20, name: 'user', comment: 'Nombre de usuario' })
    user: string;

    @Column({ type: 'integer', name: 'password', comment: 'Contraseña del usuario' })
    password: number;
}
