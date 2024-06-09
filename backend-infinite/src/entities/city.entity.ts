import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Customer } from './customer.entity';

@Entity('cities')
export class City {
  @PrimaryGeneratedColumn({ name: 'idcity' })
  idcity: number;

  @Column({ name: 'cityname', type: 'varchar', length: 20 })
  city: string;

  @OneToMany(() => Customer, (customer) => customer.city)
  customers: Customer[];
}
