import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('administrator')
export class Administrator {
  @PrimaryGeneratedColumn({ name:'idadministrator' })
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
}
