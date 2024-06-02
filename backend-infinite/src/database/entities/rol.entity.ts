import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('rol')
export class Rol {
  @PrimaryGeneratedColumn()
  idrol: number;

  @Column({ type: 'varchar', length: 20 })
  rol: string;
}