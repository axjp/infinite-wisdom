import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { Rol } from './rol.entity';

@Entity('administrator')
export class Administrator {
  @PrimaryGeneratedColumn({name: 'idadministrator'})
  idadministrator: number;

  @Column({ type: 'varchar', length: 20 })
  name: string;

  @Column({ type: 'varchar', length: 20 })
  lastname: string;

  @Column({ type: 'varchar', length: 50 })
  email: string;

  @ManyToOne(() => User, (user) => user.administrators)
  @JoinColumn({ name: 'iduser' })
  user: User;

  @ManyToOne(() => Rol, (rol) => rol.administrators)
  @JoinColumn({ name: 'idrol' })
  rol: Rol;

  @Column({ type: 'integer' })
  iduser: number;


}
