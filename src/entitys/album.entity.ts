import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsUUID } from 'class-validator';

@Entity('aldum')
export class AlbumEntity {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  id: string;

  @Column({ nullable: false })
  @IsNotEmpty()
  name: string;

  @Column({ nullable: false })
  @IsNotEmpty()
  year: number;

  @Column({ nullable: false })
  artistId: string; // refers to Artist
}
