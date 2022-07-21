import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('atrist')
export class ArtistEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  grammy: boolean;
}
