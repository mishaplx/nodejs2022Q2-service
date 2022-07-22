import { IAlbum } from './interfaces/album.interface';
import { AlbumDto } from './dto/albums.dto';
import {
  Controller,
  Body,
  Get,
  Post,
  Param,
  Put,
  ParseUUIDPipe,
  Delete,
} from '@nestjs/common';
import { ErrorHandler } from 'src/errorhandler/error.handler';
import { AlbumService } from './album/album.service';
import { CreateAlbumDto } from './dto/create-albums.dto';
import { UpdateAlbumDto } from './dto/update-albums.dto';

@Controller('album')
export class AlbumController {
  error = new ErrorHandler();
  constructor(private readonly Albumservice: AlbumService) {}
  @Get()
  getall() {
    return this.Albumservice.getall();
  }
  @Get(':id')
  async getById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<void | IAlbum> {
    const Album = await this.Albumservice.getById(id);
    if (!Album) return this.error.notFound('Album');
    return Album;
  }
  @Post()
  create(@Body() createAlbum: CreateAlbumDto): Promise<AlbumDto> {
    return this.Albumservice.create(createAlbum);
  }
  @Delete(':id')
  async delete(@Param('id', ParseUUIDPipe) id: string): Promise<string | void> {
    console.log(await this.Albumservice.delete(id), 'controller');
    return await this.Albumservice.delete(id);
  }
  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateAlbumDto: UpdateAlbumDto,
  ) {
    return this.Albumservice.update(updateAlbumDto, id);
  }
}
