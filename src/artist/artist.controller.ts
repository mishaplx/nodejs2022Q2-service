import { IArtist } from './artists/interface/artist.intarface';
import { ErrorHandler } from './../errorhandler/error.handler';
import {
  Controller,
  Body,
  Get,
  Post,
  Param,
  Put,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { AtristService } from './artists/atrist.service';
import { ArtistDto } from '../artist/dto/artist.tdo';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
@Controller('artist')
export class ArtistController {
  error = new ErrorHandler();
  constructor(private readonly artistservice: AtristService) {}
  @Get()
  getall(): Promise<IArtist[]> {
    return this.artistservice.getall();
  }
  @Get(':id')
  async getById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<void | ArtistDto> {
    const artist = await this.artistservice.findOne(id);
    if (!artist) return this.error.notFound('Artist');
    return artist;
  }
  @Post()
  create(@Body() createArtist: CreateArtistDto): Promise<IArtist> {
    return this.artistservice.create(createArtist);
  }
  @Delete(':id')
  async delete(@Param('id', ParseUUIDPipe) id: string): Promise<string | void> {
    const track = await this.artistservice.delete(id);
    if (!track) return this.error.notFound('Track');
    return this.error.deleted('Track');
  }
  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateArtistDto: UpdateArtistDto,
  ): Promise<IArtist | void> {
    return this.artistservice.update(updateArtistDto, id);
  }
}
