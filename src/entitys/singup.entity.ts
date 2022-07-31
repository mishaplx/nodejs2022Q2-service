import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsUUID } from 'class-validator';
@Entity('singup')
export class SingupEntity {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  id: string;
  @Column({ nullable: false })
  @IsNotEmpty()
  login: string;
  @Column({ nullable: false })
  @IsNotEmpty()
  password: string;
}
