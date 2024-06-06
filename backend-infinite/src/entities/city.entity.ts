import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('city')
export class CityEntity {
    @PrimaryGeneratedColumn({ type: 'integer', name: 'idcity', comment: 'ID de la ciudad' })
    idCity: number;

    @Column({ type: 'varchar', length: 20, name: 'city', comment: 'Nombre de la ciudad' })
    city: string;
}
