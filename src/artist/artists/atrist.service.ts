import { ArtistDto } from './../dto/artist.tdo';
import { TrackEntity } from './../../entitys/track.entity';
import { ErrorHandler } from './../../errorhandler/error.handler';
import { AlbumEntity } from './../../entitys/album.entity';
import { ArtistEntity } from './../../entitys/artist.entity';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateArtistDto } from '../dto/create-artist.dto';
import { UpdateArtistDto } from '../dto/update-artist.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class AtristService {
  error = new ErrorHandler();
  constructor(
    @InjectRepository(ArtistEntity)
    private ArtistRepository: Repository<ArtistEntity>,

    @InjectRepository(AlbumEntity)
    private AlbumRepository: Repository<AlbumEntity>,

    @InjectRepository(TrackEntity)
    private TrackRepository: Repository<TrackEntity>,
  ) {}

  getall() {
    return this.ArtistRepository.find();
  }
  async findOne(id: string) {
    const TrackById = await this.ArtistRepository.findBy({ id: id });
    return TrackById[0];
  }
  async create(CreateArtist: CreateArtistDto) {
    const newartist = {
      ...CreateArtist,
      id: uuidv4(),
    };
    const newArtistSave = await this.ArtistRepository.create(newartist);
    await this.ArtistRepository.save(newArtistSave);
    return newArtistSave[0];
  }
  async delete(id: string): Promise<string | void> {
    // const deleteTrack = await this.ArtistRepository.delete({ id: id });
    const artist = await this.ArtistRepository.findBy({ id: id });

    if (!!artist) {
      const allAlbum = await this.AlbumRepository.find();
      allAlbum.forEach((album) => {
        if (album.artistId === id) album.artistId = null;
      });
      const allTrack = await this.TrackRepository.find();
      allTrack.forEach((track) => {
        if (track.artistId === id) track.artistId = null;
      });
      // this.bd.favorites.artists.forEach((item) => {
      //   if (item === id) {
      //     this.bd.favorites.artists.splice(
      //       this.bd.favorites.artists.indexOf(id),
      //       1,
      //     );
      //   }
      // });
    }

    const resArtist = artist.filter((artist) => artist.id !== id);

    return !!resArtist ? this.error.deleted('artist') : null;
  }

  async update(params: UpdateArtistDto, id: string): Promise<void | ArtistDto> {
    const allArtist = await this.ArtistRepository.find();
    if (!allArtist) {
      return this.error.notFound('artist');
    } else {
      allArtist.map((artist) => {
        if (artist.id === id) {
          return Object.assign(artist, params);
        }
        return artist;
      });
      //return allArtist;
    }
  }
}
