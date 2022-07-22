import { ITrack } from './interfaces/track.interface';
import { TrackDto } from './dto/track.dto';
import { ErrorHandler } from './../errorhandler/error.handler';
import {
  Controller,
  Body,
  Get,
  Post,
  Param,
  ParseUUIDPipe,
  Put,
  Delete,
} from '@nestjs/common';
import { TrackService } from './track/track.service';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { TrackEntity } from '../entitys/track.entity';

@Controller('track')
export class TrackController {
  error = new ErrorHandler();
  constructor(private readonly Trackservice: TrackService) {}
  @Get()
  getall(): Promise<TrackEntity[]> {
    return this.Trackservice.getall();
  }
  @Get(':id')
  async getById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<void | TrackDto> {
    const track = await this.Trackservice.findOne(id);
    if (!track) return this.error.notFound('Track');
    return track;
  }
  @Post()
  create(@Body() createTrackDto: CreateTrackDto): Promise<ITrack> {
    return this.Trackservice.create(createTrackDto);
  }
  @Delete(':id')
  async delete(@Param('id', ParseUUIDPipe) id: string): Promise<string | void> {
    const track = await this.Trackservice.delete(id);
    if (!track) return this.error.notFound('Track');
    return this.error.deleted('Track');
  }
  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateTrackDto: UpdateTrackDto,
  ) {
    const track = await this.Trackservice.update(id, updateTrackDto);
    if (!track) return this.error.notFound('Track');
    return track;
  }
}
