import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Gender } from './gender.entity';
import { User } from './user.entity';
import { City } from './city.entity';
import { Loan } from './loan.entity';
import { Review } from './review.entity';
import { Download } from './download.entity';

@Entity('customers')
export class Customer {
  @PrimaryGeneratedColumn({ name: 'idcustomer' })
  idcustomer: number;

  @Column({ name: 'customername', type: 'varchar', length: 20, comment: 'Ingresa el nombre' })
  name: string;

  @Column({ name: 'customerlastname', type: 'varchar', length: 20,comment: 'Ingresa el apellido' })
  lastname: string;


  @Column({ name: 'customeremail', type: 'varchar', length: 50 })
  email: string;

  @ManyToOne(() => Gender, (gender) => gender.customers)
  @JoinColumn({ name: 'idgender' })
  gender: Gender;

  @ManyToOne(() => User, (user) => user.customers)
  @JoinColumn({ name: 'iduser' })
  user: User;

  @ManyToOne(() => City, (city) => city.customers)
  @JoinColumn({ name: 'idcity' })
  city: City;

  @OneToMany(() => Loan, (loan) => loan.customer)
  loans: Loan[];

  @OneToMany(() => Review, (review) => review.customer)
  reviews: Review[];

  @OneToMany(() => Download, (download) => download.customer)
  downloads: Download[];
}
