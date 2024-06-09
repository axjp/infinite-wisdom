import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Administrator } from './administrator.entity';

@Entity('rols')
export class Rol {
  @PrimaryGeneratedColumn({ name: 'idrol' })
  idrol: number;

  @Column({ name: 'rolname', type: 'varchar', length: 20 })
  rol: string;

  @OneToMany(() => Administrator, (administrator) => administrator.rol)
  administrators: Administrator[];
}
