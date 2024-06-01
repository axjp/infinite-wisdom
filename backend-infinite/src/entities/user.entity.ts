import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Role } from './role.entity';
import { Customer } from './customer.entity';
import { Administrator } from './administrator.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  iduser: number;

  @Column()
  user: string;

  @Column()
  password: string;

  @ManyToOne(() => Role, role => role.users)
  @JoinColumn({ name: 'idrol' })
  role: Role;

  @OneToMany(() => Customer, customer => customer.user)
  customers: Customer[];

  @OneToMany(() => Administrator, administrator => administrator.user)
  administrators: Administrator[];
}
