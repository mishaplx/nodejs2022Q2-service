import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Exclude } from 'class-transformer';
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

  @Exclude()
  refresh_token?: string;
  // @Column()
  // createdAt: Date | null; // timestamp of creation

  // @Column()
  // @IsNotEmpty()
  // updatedAt: Date; // timestamp of last update
}
