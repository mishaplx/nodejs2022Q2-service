import { TrackEntity } from './../../entitys/track.entity';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateTrackrDto } from '../dto/track.dto';
import { UpdateTrackDto } from '../dto/update.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class TrackService {
  constructor(
    @InjectRepository(TrackEntity)
    private TrackRepository: Repository<TrackEntity>,
  ) {}
  async getall() {
    return this.TrackRepository.find();
  }
  async getById(id: string) {
    const TrackById = await this.TrackRepository.findBy({ id: id });
    return TrackById;
  }
  async create(CreateTrackrDto: CreateTrackrDto) {
    const newTrack = {
      ...CreateTrackrDto,
      id: uuidv4(),
    };
    const newTrackSave = await this.TrackRepository.create(newTrack);
    await this.TrackRepository.save(newTrackSave);
    return newTrackSave;
  }
  async delete(id: string) { 
    const deleteTrack = await this.TrackRepository.delete({ id: id });
    // if (deleteTrack.length == db.track.length) {
    //   return false;
    // } /// не изменяет значение в db
    // return this.track;
    return deleteTrack;
  }
  async update(id: string, UpdateTrackDto: UpdateTrackDto) {
    const updateTrack = this.TrackRepository.update({ id: id }, UpdateTrackDto);
    return updateTrack;
  }
}
