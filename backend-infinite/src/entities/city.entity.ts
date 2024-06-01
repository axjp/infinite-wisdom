import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Customer } from './customer.entity';

@Entity('city')
export class City {
  @PrimaryGeneratedColumn()
  idcity: number;

  @Column()
  city: string;

  @OneToMany(() => Customer, customer => customer.city)
  customers: Customer[];
}
