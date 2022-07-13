import {
  Controller,
  Body,
  Get,
  HttpCode,
  Post,
  Param,
  HttpStatus,
  NotFoundException,
  BadRequestException,
  Put,
  Delete,
} from '@nestjs/common';
import { TrackService } from './track/track.service';
import { CreateTrackrDto } from './dto/track.dto';
import { UpdateTrackDto } from './dto/update.dto';

@Controller('track')
export class TrackController {
  constructor(private readonly Trackservice: TrackService) {}
  @Get()
  @HttpCode(200)
  getall() {
    return this.Trackservice.getall();
  }
  @Get(':id')
  @HttpCode(200)
  getById(@Param('id') id: string) {
    if (id.split('-').length !== 5) {
      console.log(id.split('-').length);
      throw new BadRequestException({
        status: HttpStatus.BAD_REQUEST,
        error: 'BAD_REQUEST',
      });
    }

    if (this.Trackservice.getById(id)) {
      return this.Trackservice.getById(id);
    } else {
      throw new NotFoundException({
        status: HttpStatus.NOT_FOUND,
        error: 'NOT_FOUND',
      });
    }
  }
  @Post()
  @HttpCode(201)
  create(@Body() createTrack: CreateTrackrDto) {
    if (createTrack.hasOwnProperty('name') == false) {
      throw new BadRequestException({
        status: HttpStatus.BAD_REQUEST,
        message: 'BAD_REQUEST',
      });
    }

    return this.Trackservice.create(createTrack);
  }
  @Delete(':id')
  @HttpCode(204)
  delUser(@Param('id') id: string) {
    if (id.split('-').length !== 5) {
      console.log(id.split('-').length);
      throw new BadRequestException({
        status: HttpStatus.BAD_REQUEST,
        error: 'BAD_REQUEST',
      });
    }
    if (this.Trackservice.delete(id)) {
      return this.Trackservice.delete(id);
    } else {
      throw new NotFoundException({
        status: HttpStatus.NOT_FOUND,
        error: 'NOT_FOUND',
      });
    }
  }
  @Put(':id')
  @HttpCode(200)
  updateTrack(@Param('id') id: string, @Body() UpdateTrackdto: UpdateTrackDto) {
    return this.Trackservice.update(id, UpdateTrackdto);
  }
}
