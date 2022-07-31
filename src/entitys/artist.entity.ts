import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsUUID } from 'class-validator';
@Entity('atrist')
export class ArtistEntity {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  id: string;

  @Column({ nullable: false })
  @IsNotEmpty()
  name: string;

  @Column({ nullable: false })
  @IsNotEmpty()
  grammy: boolean;
}
