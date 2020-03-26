import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Flight {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: string;

  @Column()
  aircraftType: string;

  @Column()
  status:string;
}
