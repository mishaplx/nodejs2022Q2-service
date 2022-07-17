import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import * as db from '../../db/db';
import { CreateArtistDto } from '../dto/artist.dto';
import { UpdateArtistDto } from '../dto/update.dto';
@Injectable()
export class AtristService {
  artist = db.artist;
  getall() {
    console.log(this.artist);
    return this.artist;
  }
  getById(id: string) {
    return this.artist.find((item) => item.id === id);
  }
  async create(CreateArtist: CreateArtistDto) {
    const newartist = {
      ...CreateArtist,
      id: uuidv4(),
    };
    this.artist.push(newartist);
    return newartist;
  }
  delete(id: string) {
    const newArrartist = db.artist.filter((item) => item.id !== id);
    this.artist = newArrartist;
    //db.artist = [];
    if (this.artist.length == db.artist.length) {
      return false;
    } /// не изменяет значение в db
    return this.artist;
  }
  async update(id: string, UpdateArtistDto: UpdateArtistDto) {
    const artist = this.artist.find((item) => item.id === id);
    artist.name = UpdateArtistDto.name;
    artist.grammy = UpdateArtistDto.grammy;
    return artist;
  }
}
