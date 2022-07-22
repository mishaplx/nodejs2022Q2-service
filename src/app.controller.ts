import {
  Controller,
  Get,
  Redirect,
  Headers,
  UnauthorizedException,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  hello(): string {
    return this.appService.hello();
  }
  // @Get('doc')
  // @Redirect(
  //   'https://app.swaggerhub.com/apis/OLEGORLOV100OLEG/home-library_service/1.0.0#/Login/post_login',
  // )
}
