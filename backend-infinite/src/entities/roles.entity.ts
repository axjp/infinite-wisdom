import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('roles')
export class RoleEntity {
    @PrimaryGeneratedColumn({ type: 'integer', name: 'idrol', comment: 'ID del rol' })
    idRol: number;
}
