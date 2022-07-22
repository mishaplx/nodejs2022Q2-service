import { TrackEntity } from './../../entitys/track.entity';
import { ErrorHandler } from './../../errorhandler/error.handler';
import { IAlbum } from './../interfaces/album.interface';
import { Injectable } from '@nestjs/common';

import { CreateAlbumDto } from '../dto/create-albums.dto';
import { UpdateAlbumDto } from '../dto/update-albums.dto';

import { v4 as uuidv4 } from 'uuid';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AlbumEntity } from 'src/entitys/album.entity';
@Injectable()
export class AlbumService {
  error = new ErrorHandler();
  constructor(
    @InjectRepository(AlbumEntity)
    private AlbumRepository: Repository<AlbumEntity>,
    @InjectRepository(TrackEntity)
    private TrackRepository: Repository<TrackEntity>,
  ) {}
  async getall(): Promise<IAlbum[]> {
    return await this.AlbumRepository.find();
  }
  async getById(id: string): Promise<IAlbum> {
    const Album = await this.AlbumRepository.findBy({ id: id });
    return Album[0];
  }
  async create(CreateAlbumDto: CreateAlbumDto) {
    const newAlbum = {
      ...CreateAlbumDto,
      id: uuidv4(),
    };
    const newAlbumSave = await this.AlbumRepository.create(newAlbum);
    await this.AlbumRepository.save(newAlbumSave);
    return newAlbumSave;
  }
  async delete(id: string) {
    const album = await this.getall();
    if (!!album) {
      const allTrack = await this.TrackRepository.find();
      allTrack.forEach((track) => {
        if (track.albumId === id) track.albumId = null;
      });
      // this.bd.favorites.albums.forEach((item) => {
      //   if (item === id) {
      //     this.bd.favorites.albums.splice(
      //       this.bd.favorites.albums.indexOf(id),
      //       1,
      //     );
      //   }
      // });
      this.AlbumRepository.delete({ id: id });

      return this.error.deleted('albums');
    } else {
      return this.error.notFound('albums');
    }
  }
  async update(UpdateAlbumDto: UpdateAlbumDto, id: string) {
    if (!this.AlbumRepository.findBy({ id: id })) {
      return this.error.notFound('album');
    } else {
      const AllAbbum = await this.AlbumRepository.find();
      AllAbbum.map((Album) => {
        if (Album.id === id) {
          return Object.assign(Album, UpdateAlbumDto);
        }
        return Album;
      });
      return await this.getById(id);
    }
  }
}
