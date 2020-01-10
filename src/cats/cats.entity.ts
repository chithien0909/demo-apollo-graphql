import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cats extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number
  @Column()
  name: string;
  @Column()
  age: number;
  @Column()
  breed: string;
}
