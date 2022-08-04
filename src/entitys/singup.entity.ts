import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsUUID } from 'class-validator';
@Entity('singup')
export class SingupEntity {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  id: string;
  @Column({ nullable: false })
  login: string;
  @Column({ nullable: false })
  password: string;
}
