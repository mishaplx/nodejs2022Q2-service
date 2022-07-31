import { ArtistEntity } from './../../entitys/artist.entity';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateArtistDto } from '../dto/artist.dto';
import { UpdateArtistDto } from '../dto/update.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class AtristService {
  constructor(
    @InjectRepository(ArtistEntity)
    private ArtistRepository: Repository<ArtistEntity>,
  ) {}

  getall() {
    return this.ArtistRepository.find();
  }
  async getById(id: string) {
    const TrackById = await this.ArtistRepository.findBy({ id: id });
    return TrackById;
  }
  async create(CreateArtist: CreateArtistDto) {
    const newartist = {
      ...CreateArtist,
      id: uuidv4(),
    };
    const newArtistSave = await this.ArtistRepository.create(newartist);
    await this.ArtistRepository.save(newArtistSave);
    return newArtistSave;
  }
  async delete(id: string) {
    const deleteTrack = await this.ArtistRepository.delete({ id: id });
    return deleteTrack;
  }
  async update(id: string, UpdateArtistDto: UpdateArtistDto) {
    const updateTrack = this.ArtistRepository.update(
      { id: id },
      UpdateArtistDto,
    );
    return updateTrack;
  }
}
