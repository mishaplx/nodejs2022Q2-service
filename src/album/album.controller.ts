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
import { AlbumService } from './album/album.service';
import { CreateAlbumDto } from './dto/album.dto';
import { UpdateAlbumDto } from './dto/update.dto';

@Controller('album')
export class AlbumController {
  constructor(private readonly Albumservice: AlbumService) {}
  @Get()
  @HttpCode(200)
  getall() {
    return this.Albumservice.getall();
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

    if (this.Albumservice.getById(id)) {
      return this.Albumservice.getById(id);
    } else {
      throw new NotFoundException({
        status: HttpStatus.NOT_FOUND,
        error: 'NOT_FOUND',
      });
    }
  }
  @Post()
  @HttpCode(201)
  create(@Body() createAlbum: CreateAlbumDto) {
    if (createAlbum.hasOwnProperty('name') == false) {
      throw new BadRequestException({
        status: HttpStatus.BAD_REQUEST,
        message: 'BAD_REQUEST',
      });
    }

    return this.Albumservice.create(createAlbum);
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
    if (this.Albumservice.delete(id)) {
      return this.Albumservice.delete(id);
    } else {
      throw new NotFoundException({
        status: HttpStatus.NOT_FOUND,
        error: 'NOT_FOUND',
      });
    }
  }
  @Put(':id')
  @HttpCode(200)
  updateTrack(@Param('id') id: string, @Body() UpdateAldto: UpdateAlbumDto) {
    return this.Albumservice.update(id, UpdateAldto);
  }
}
