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
  Headers,
  UnauthorizedException,
  HttpException,
} from '@nestjs/common';
import { TrackService } from './track/track.service';
import { CreateTrackrDto } from './dto/track.dto';
import { UpdateTrackDto } from './dto/update.dto';
import { LoginService } from '../login/login.service';
//import { LoginService } from '../login/login.service';
LoginService;
@Controller('track')
export class TrackController {
  constructor(
    private readonly Trackservice: TrackService,
    private Loginservice: LoginService,
  ) {}
  @Get()
  @HttpCode(200)
  getall() {
    return this.Trackservice.getall();
  }
  @Get(':id')
  @HttpCode(200)
  getById(@Param('id') id: string) {
    if (id.split('-').length !== 5) {
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
  async create(@Body() createTrack: CreateTrackrDto, @Headers() headers) {
    //console.log(this.Loginservice.verify(headers.authorization),'qweqweqweqweqweqwe');

    //console.log(headers.authorization,'---headers.authorization');

    // try {
    //   const token = (
    //     headers['Authorization'] ||
    //     headers['authorization'] ||
    //     ''
    //   ).split(' ')[1];
    //   return await this.Loginservice.verify(token);
    // } catch (err) {
    //   switch (err.message) {
    //     case 'invalid token':
    //     case 'jwt must be provided':
    //       throw new UnauthorizedException();
    //     default:
    //       throw new HttpException(
    //         err.message,
    //         HttpStatus.INTERNAL_SERVER_ERROR,
    //       );
    //   }
    // }
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
  delTrack(@Param('id') id: string) {
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
