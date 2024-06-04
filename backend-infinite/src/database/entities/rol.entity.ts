import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { Administrator } from './administrator.entity';

@Entity('rol')
export class Rol {
  @PrimaryGeneratedColumn()
  idrol: number;

  @Column({ type: 'varchar', length: 20 })
  rol: string;

  @OneToMany(() => User, (user) => user.rol)
  users: User[];

  @OneToMany(() => Administrator, (administrator) => administrator.rol)
  administrators: Administrator[];
}
