import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty, IsUUID } from 'class-validator';

@Entity('track')
export class TrackEntity {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  id: string;

  @Column()
  name: string;

  @Column()
  @IsNotEmpty()
  artistId: string; // refers to Artist

  @Column()
  @IsNotEmpty()
  albumId: string; // refers to Album

  @Column()
  @IsNotEmpty()
  duration: number; // integer number
}
