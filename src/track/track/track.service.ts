import { TrackDto } from './../dto/track.dto';
import { TrackEntity } from './../../entitys/track.entity';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateTrackDto } from '../dto/create-track.dto';
import { UpdateTrackDto } from '../dto/update-track.dto';
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
  async findOne(id: string): Promise<TrackEntity> {
    const TrackById = await this.TrackRepository.findBy({ id: id });
    return TrackById[0];
  }
  async create(CreateTrackrDto: CreateTrackDto) {
    const newTrack = {
      ...CreateTrackrDto,
      id: uuidv4(),
    };
    const newTrackSave = await this.TrackRepository.create(newTrack);
    await this.TrackRepository.save(newTrackSave);
    return newTrackSave;
  }
  async delete(id: string) {
    await this.TrackRepository.delete({ id: id });
    const track = this.findOne(id);
    this.TrackRepository.delete({ id: id });
    return !!track ? `Track with id ${id} was deleted` : null;
  }
  async update(id: string, params: UpdateTrackDto): Promise<TrackDto> {
    const AllTrack = await this.TrackRepository.find();
    AllTrack.map((track) => {
      if (track.id === id) {
        return Object.assign(track, params);
      }
      return track;
    });
    return await this.findOne(id);
  }
}
