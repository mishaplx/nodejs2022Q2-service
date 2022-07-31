import { ArtistController } from './../artist.controller';
import { ArtistEntity } from './../../entitys/artist.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AtristService } from './atrist.service';

@Module({
  imports: [TypeOrmModule.forFeature([ArtistEntity])],
  controllers: [ArtistController],
  providers: [AtristService],
})
export class ArtistModule {}
