import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('customer')
export class CustomerEntity {
@PrimaryGeneratedColumn('uuid')
id:string;

@Column({type:'varchar',name:'first_najjjjjjjj', length:'10', comment:'Nombres del usuario'})
name:string;

@Column({type:'integer', name:'age'})
age:number;

@Column({ type:'boolean', name:'state'})
state:boolean;



}