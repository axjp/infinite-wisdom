import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Gender } from './gender.entity';
import { City } from './city.entity';
import { User } from './user.entity';

@Entity('customer')
export class Customer {
  @PrimaryGeneratedColumn({ name:'idcostumer' })
  idcustomer: number;

  @Column({ type: 'varchar', length: 20 })
  name: string;

  @Column({ type: 'varchar', length: 20 })
  lastname: string;

  @ManyToOne(() => Gender, (gender) => gender.customers)
  @JoinColumn({ name: 'idgender' })
  gender: Gender;

  @ManyToOne(() => City, (city) => city.customers)
  @JoinColumn({ name: 'idcity' })
  city: City;

  @ManyToOne(() => User, (user) => user.customers)
  @JoinColumn({ name: 'iduser' })
  user: User;
  loans: any;
  reviews: any;
  downloads: any;
}
