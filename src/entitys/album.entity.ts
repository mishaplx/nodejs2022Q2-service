import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('aldum')
export class AlbumEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  year: number;

  @Column()
  artistId: string | null; // refers to Artist
}
