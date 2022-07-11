import { Controller, Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('doc')
  @Redirect(
    'https://app.swaggerhub.com/apis/OLEGORLOV100OLEG/home-library_service/1.0.0#/Login/post_login',
  )
  doc(): string {
    return this.appService.doc();
  }
}
