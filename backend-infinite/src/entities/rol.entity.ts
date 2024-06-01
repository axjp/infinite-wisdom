import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from './user.entity';

@Entity('role')
export class Role {
  @PrimaryGeneratedColumn()
  idrol: number;

  @Column()
  rol: string;

  @OneToMany(() => User, user => user.role)
  users: User[];
}
