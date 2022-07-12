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
import { LoginService } from './login/login.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private LoginService: LoginService,
  ) {}

  @Get('doc')
  @Redirect(
    'https://app.swaggerhub.com/apis/OLEGORLOV100OLEG/home-library_service/1.0.0#/Login/post_login',
  )
  doc(): string {
    return this.appService.doc();
  }
  @Post('verify')
  async create(@Headers() headers) {
    try {
      const token = (
        headers['Authorization'] ||
        headers['authorization'] ||
        ''
      ).split(' ')[1];
      return await this.LoginService.verify(token);
    } catch (err) {
      switch (err.message) {
        case 'invalid token':
        case 'jwt must be provided':
          throw new UnauthorizedException();
        default:
          throw new HttpException(
            err.message,
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
      }
    }
  }
}
