import { ErrorHandler } from './../errorhandler/error.handler';
import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/user.dto';
import { SingupService } from './singup.service';
@Controller('auth')
export class SingupController {
  error = new ErrorHandler();
  constructor(private readonly singupService: SingupService) {}
  @Post('singup')
  singup(@Body() singupuser: CreateUserDto) {
    if (
      typeof singupuser.login !== 'string' ||
      typeof singupuser.password !== 'string'
    ) {
      this.error.badRequest();
    }
    return this.singupService.create(singupuser);
  }
}
