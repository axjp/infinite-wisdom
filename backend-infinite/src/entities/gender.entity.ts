import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Customer } from './customer.entity';

@Entity('gender')
export class Gender {
  @PrimaryGeneratedColumn()
  idgender: number;

  @Column()
  gender: string;

  @OneToMany(() => Customer, customer => customer.gender)
  customers: Customer[];
}
