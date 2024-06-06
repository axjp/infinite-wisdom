import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('gender')
export class GenderEntity {
    @PrimaryGeneratedColumn({ type: 'integer', name: 'idgender', comment: 'ID del género' })
    idGender: number;

    @Column({ type: 'varchar', length: 20, name: 'gender', comment: 'Nombre del género' })
    gender: string;
}
