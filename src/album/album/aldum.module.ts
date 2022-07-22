import { TrackEntity } from './../../entitys/track.entity';
import { AlbumEntity } from './../../entitys/album.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AlbumController } from '../album.controller';
import { AlbumService } from './album.service';

@Module({
  imports: [TypeOrmModule.forFeature([AlbumEntity, TrackEntity])],
  controllers: [AlbumController],
  providers: [AlbumService],
})
export class AldumModule {}
