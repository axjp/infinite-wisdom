import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Loan } from './loan.entity';
import { User } from './user.entity';
import { City } from './city.entity';
import { Gender } from './gender.entity';

@Entity('customer')
export class Customer {
  @PrimaryGeneratedColumn()
  idcustomer: number;

  @Column({ type: 'varchar', length: 20 })
  name: string;

  @Column({ type: 'varchar', length: 20 })
  lastname: string;

  @ManyToOne(() => Gender, (gender) => gender.customers)
  @JoinColumn({ name: 'idgender' })
  gender: Gender;

  @ManyToOne(() => City, (city) => city.customers)
  @JoinColumn({ name: 'idcty' })
  city: City;

  @ManyToOne(() => User, (user) => user.customers)
  @JoinColumn({ name: 'iduser' })
  user: User;

  @OneToMany(() => Loan, (loan) => loan.customer)
  loans: Loan[];
}
