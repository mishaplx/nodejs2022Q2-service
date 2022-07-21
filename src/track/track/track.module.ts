import { TrackService } from './track.service';
import { TrackController } from './../track.controller';
import { TrackEntity } from './../../entitys/track.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([TrackEntity])],
  controllers: [TrackController],
  providers: [TrackService],
})
export class TrackModule {}
