import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsNotEmpty()
  login: string;

  @Column()
  @IsNotEmpty()
  password: string;

  @Column()
  @IsNotEmpty()
  version: number; // integer number, increments on update

  // @Column()
  // createdAt: Date | null; // timestamp of creation

  // @Column()
  // @IsNotEmpty()
  // updatedAt: Date; // timestamp of last update
}
