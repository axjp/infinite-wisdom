import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('city')
export class City {
  @PrimaryGeneratedColumn({ name:'idcity' })
  idcity: number;

  @Column({ type: 'varchar', length: 20 })
  city: string;
  customers: any;
}
