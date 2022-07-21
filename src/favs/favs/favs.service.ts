
import { FavsEntity } from './../../entitys/favs.entity';
import { Injectable } from '@nestjs/common';
import * as db from '../../db/db';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class FavsService {
  constructor(
    @InjectRepository(FavsEntity)
    private FavsRepository: Repository<FavsEntity>,
    @InjectRepository(TrackEntity)
    private TrackRepository: Repository<TrackEntity>,
  ) {}
  async gelAll() {
    return this.FavsRepository.find();
  }
  async addTrack(id: string) {
    const Track = await this.TrackRepository.findBy({ id: id });
    //связь 
    const addTrack = await this.FavsRepository.insert(newFavTrack);
    return TrackById;
  }
  async addAlbum(id) {
    const album = db.album.find((item) => item.id == id);
    db.favs.album.push(album);
  }
  async addArtist(id) {
    const artist = db.artist.find((item) => item.id == id);
    db.favs.artist.push(artist);
  }

  async deleteTrack(id) {
    const track = db.track.filter((item) => item.id !== id);
    db.favs.track = track;
  }
  async deleteAlbum(id) {
    const album = db.album.filter((item) => item.id !== id);
    db.favs.album = album;
  }
  async deleteArtist(id) {
    const artist = db.artist.filter((item) => item.id !== id);
    db.favs.artist = artist;
  }
}
