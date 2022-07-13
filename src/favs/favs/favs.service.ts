import { Injectable } from '@nestjs/common';
import * as db from '../../db/db';
@Injectable()
export class FavsService {
  async gelAll() {
    return db.favs;
  }
  async addTrack(id) {
    const track = db.track.find((item) => item.id == id);
    console.log(track);
    db.favs.track.push(track);
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
