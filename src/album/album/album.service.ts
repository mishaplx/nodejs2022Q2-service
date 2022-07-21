import { Injectable } from '@nestjs/common';

import { CreateAlbumDto } from '../dto/album.dto';
import { UpdateAlbumDto } from '../dto/update.dto';

import { v4 as uuidv4 } from 'uuid';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AlbumEntity } from 'src/entitys/album.entity';
@Injectable()
export class AlbumService {
  constructor(
    @InjectRepository(AlbumEntity)
    private AlbumRepository: Repository<AlbumEntity>,
  ) {}
  async getall() {
    return await this.AlbumRepository.find();
  }
  async getById(id: string) {
    const AlbumById = await this.AlbumRepository.findBy({ id: id });
    return AlbumById;
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
    const deleteAlbum = await this.AlbumRepository.delete({ id: id });
    // //db.album = [];
    // if (this.album.length == db.album.length) {
    //   return false;
    // } /// не изменяет значение в db
    return deleteAlbum;
  }
  async update(id: string, UpdateAlbumDto: UpdateAlbumDto) {
    const updateAlbum = this.AlbumRepository.update({ id: id }, UpdateAlbumDto);
    return updateAlbum;
  }
}
