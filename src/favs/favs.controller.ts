import { JwtAuthGuard } from './../auth/auth.guard';
import {
  Controller,
  Get,
  Post,
  Delete,
  HttpCode,
  Param,
  UseGuards,
} from '@nestjs/common';
import { FavsService } from './favs/favs.service';

@Controller('favs')
@UseGuards(JwtAuthGuard)
export class FavsController {
  constructor(private Favservice: FavsService) {}
  @Get()
  @HttpCode(200)
  getAll() {
    return this.Favservice.gelAll();
  }
  @Post('track/:id')
  @HttpCode(201)
  addTrack(@Param('id') id: string) {
    return this.Favservice.addTrack(id);
  }
  @Post('album/:id')
  @HttpCode(201)
  addAlbum(@Param('id') id: string) {
    return this.Favservice.addAlbum(id);
  }
  @Post('artist/:id')
  @HttpCode(201)
  addArtist(@Param('id') id: string) {
    return this.Favservice.addArtist(id);
  }
  @Delete('track/:id')
  @HttpCode(204)
  deleteTrack(@Param('id') id: string) {
    return this.Favservice.deleteTrack(id);
  }
  @Delete('album/:id')
  @HttpCode(204)
  deleteAlbum(@Param('id') id: string) {
    return this.Favservice.deleteAlbum(id);
  }
  @Delete('track/:id')
  @HttpCode(204)
  deleteArtist(@Param('id') id: string) {
    return this.Favservice.deleteArtist(id);
  }
}
