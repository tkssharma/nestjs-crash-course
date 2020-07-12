import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  email: string;

  @Column()
  address: string;

  @Column()
  course: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}