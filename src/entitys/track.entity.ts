import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('track')
export class TrackEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  artistId: string | null; // refers to Artist

  @Column()
  albumId: string; // refers to Album

  @Column()
  duration: number; // integer number
}
