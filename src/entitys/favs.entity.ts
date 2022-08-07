import { Entity } from 'typeorm';

@Entity('favorites')
export class FavsEntity {
  artists: string; // favorite artists ids
  albums: string; // favorite albums ids
  tracks: string; // favorite tracks ids
}
