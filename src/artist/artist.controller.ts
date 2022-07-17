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
import { AtristService } from './atrists/atrist.service';
import { CreateArtistDto } from './dto/artist.dto';
import { UpdateArtistDto } from './dto/update.dto';
@Controller('artist')
export class ArtistController {
  constructor(private readonly artistservice: AtristService) {}
  @Get()
  @HttpCode(200)
  getall() {
    return this.artistservice.getall();
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

    if (this.artistservice.getById(id)) {
      return this.artistservice.getById(id);
    } else {
      throw new NotFoundException({
        status: HttpStatus.NOT_FOUND,
        error: 'NOT_FOUND',
      });
    }
  }
  @Post()
  @HttpCode(200)
  create(@Body() createArtist: CreateArtistDto) {
    if (createArtist.hasOwnProperty('name') == false) {
      throw new BadRequestException({
        status: HttpStatus.BAD_REQUEST,
        message: 'BAD_REQUEST',
      });
    }

    return this.artistservice.create(createArtist);
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
    if (this.artistservice.delete(id)) {
      return this.artistservice.delete(id);
    } else {
      throw new NotFoundException({
        status: HttpStatus.NOT_FOUND,
        error: 'NOT_FOUND',
      });
    }
  }
  @Put(':id')
  @HttpCode(200)
  updateTrack(
    @Param('id') id: string,
    @Body() UpdateArtistdto: UpdateArtistDto,
  ) {
    return this.artistservice.update(id, UpdateArtistdto);
  }
}
