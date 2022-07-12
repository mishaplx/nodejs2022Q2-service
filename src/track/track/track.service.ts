import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import * as db from '../../db/db';
import { CreateTrackrDto } from '../dto/track.dto';
@Injectable()
export class TrackService {
  track = db.track;
  getall() {
    return db.track;
  }
  getById(id: string) {
    return db.track.find((item) => item.id === id);
  }
  async create(CreateTrackrDto: CreateTrackrDto) {
    const newTrack = {
      ...CreateTrackrDto,
      id: uuidv4(),
    };
    console.log(newTrack);
    db.track.push(newTrack);
    return newTrack;
  }
  async updateTrack(id: string) {
    const track = db.user.find((item) => item.id === id);
  }
  deleteTrack(id: string) {
    const newArrTrack = db.user.filter((item) => item.id !== id);
    console.log(newArrTrack);
    this.track = newArrTrack;
    if (this.track.length == db.track.length) {
      return false;
    } /// не изменяет значение в db
    return this.track;
  }
}
