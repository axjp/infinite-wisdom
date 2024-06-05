import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Rol } from './rol.entity';


@Entity('user')
export class User {
  @PrimaryGeneratedColumn({name: 'iduser'})
  iduser: number;

  @Column({ type: 'varchar', length: 20 })
  name: string;

  @Column({ type: 'varchar', length: 20 })
  lastname: string;

  @Column({ type: 'varchar', length: 50 })
  email: string;

  @Column({ type: 'varchar', length: 50 })
  password: string;
  customers: any;
  administrators: any;
  username: any;

  @ManyToOne(() => Rol, (rol) => rol.users)
  @JoinColumn({ name: 'idrol' })
  rol: Rol;
}
