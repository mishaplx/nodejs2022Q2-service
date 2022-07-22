import { AlbumDto } from './dto/allAlbum.dto';
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
  ParseUUIDPipe,
  Delete,
} from '@nestjs/common';
import { ErrorHandler } from 'src/errorhandler/error.handler';
import { AlbumService } from './album/album.service';
import { CreateAlbumDto } from './dto/album.dto';
import { UpdateAlbumDto } from './dto/update.dto';

@Controller('album')
export class AlbumController {
  error = new ErrorHandler();
  constructor(private readonly Albumservice: AlbumService) {}
  @Get()
  @HttpCode(200)
  getall() {
    return this.Albumservice.getall();
  }
  @Get(':id')
  @Get(':id')
  async getById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<void | AlbumDto> {
    const Album = await this.Albumservice.getById(id);
    if (!Album) return this.error.notFound('Album');
    return Album;
  }
  @Post()
  @HttpCode(201)
  create(@Body() createAlbum: CreateAlbumDto): Promise<AlbumDto> {
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
