import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { Administrator } from './administrator.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Administrator } from './administrator.entity';

@Entity('rols')
export class Rol {
  @PrimaryGeneratedColumn({ name: 'idrol' })
  idrol: number;

  @Column({ name: 'rolname', type: 'varchar', length: 20 })
  rol: string;

  @OneToMany(() => User, (user) => user.rol)
  users: User[];

  @OneToMany(() => Administrator, (administrator) => administrator.rol)
  administrators: Administrator[];

  @OneToMany(() => Administrator, (administrator) => administrator.rol)
  administrators: Administrator[];
}
