import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('city')
export class City {
  @PrimaryGeneratedColumn()
  idcity: number;

  @Column({ type: 'varchar', length: 20 })
  city: string;
  customers: any;
}
