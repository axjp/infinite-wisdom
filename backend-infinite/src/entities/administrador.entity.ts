import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity('administrator')
export class Administrator {
  @PrimaryGeneratedColumn()
  idadministrator: number;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @ManyToOne(() => User, user => user.administrators)
  @JoinColumn({ name: 'iduser' })
  user: User;
}
