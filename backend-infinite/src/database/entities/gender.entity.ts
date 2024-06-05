import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Customer } from './customer.entity';

@Entity('genders')
export class Gender {
  @PrimaryGeneratedColumn({ name: 'idgender' })
  idgender: number;

  @Column({ name: 'gendername', type: 'varchar', length: 20 })
  gender: string;

  @OneToMany(() => Customer, (customer) => customer.gender)
  customers: Customer[];
}
