import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Rol } from './rol.entity';

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Customer } from './customer.entity';
import { Administrator } from './administrator.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ name: 'iduser' })
  iduser: number;

  @Column({ name: 'username', type: 'varchar', length: 20 })
  username: string;

  @Column({ name: 'userpassword', type: 'varchar', length: 20 })
  password: string;
  customers: any;
  administrators: any;
  username: any;

  @ManyToOne(() => Rol, (rol) => rol.users)
  @JoinColumn({ name: 'idrol' })
  rol: Rol;

  @OneToMany(() => Customer, (customer) => customer.user)
  customers: Customer[];

  @OneToMany(() => Administrator, (administrator) => administrator.user)
  administrators: Administrator[];
}
