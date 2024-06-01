import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { Gender } from './gender.entity';
import { City } from './city.entity';
import { Download } from './download.entity';
import { Loan } from './loan.entity';

@Entity('customer')
export class Customer {
  @PrimaryGeneratedColumn()
  idcustomer: number;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @ManyToOne(() => Gender, gender => gender.customers)
  @JoinColumn({ name: 'idgender' })
  gender: Gender;

  @ManyToOne(() => City, city => city.customers)
  @JoinColumn({ name: 'idcity' })
  city: City;

  @ManyToOne(() => User, user => user.customers)
  @JoinColumn({ name: 'iduser' })
  user: User;

  @OneToMany(() => Download, download => download.customer)
  downloads: Download[];

  @OneToMany(() => Loan, loan => loan.customer)
  loans: Loan[];
}
