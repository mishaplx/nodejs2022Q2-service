import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import * as db from '../../db/db';
import { CreateTrackrDto } from '../dto/track.dto';
import { UpdateTrackDto } from '../dto/update.dto';
@Injectable()
export class TrackService {
  track = db.track;
  getall() {
    console.log(this.track);
    return this.track;
  }
  getById(id: string) {
    return this.track.find((item) => item.id === id);
  }
  async create(CreateTrackrDto: CreateTrackrDto) {
    const newTrack = {
      ...CreateTrackrDto,
      id: uuidv4(),
    };
    this.track.push(newTrack);
    return newTrack;
  }
  delete(id: string) {
    const newArrTrack = db.track.filter((item) => item.id !== id);
    this.track = newArrTrack;
    //db.track = [];
    if (this.track.length == db.track.length) {
      return false;
    } /// не изменяет значение в db
    return this.track;
  }
  async update(id: string, UpdateTrackDto: UpdateTrackDto) {
    const track = this.track.find((item) => item.id === id);
    track.name = UpdateTrackDto.name;
    track.artistId = UpdateTrackDto.artistId;
    track.albumId = UpdateTrackDto.artistId;
    track.duration = UpdateTrackDto.duration;
    return track;
  }
}
