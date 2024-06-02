import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('gender')
export class Gender {
  @PrimaryGeneratedColumn()
  idgender: number;

  @Column({ type: 'varchar', length: 20 })
  gender: string;
  customers: any;
}
