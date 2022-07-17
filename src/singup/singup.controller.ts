import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/user.dto';
import { SingupService } from './singup.service';
@Controller('singup')
export class SingupController {
  constructor(private readonly SingupService: SingupService) {}
  @Post()
  singup(@Body() singupuser: CreateUserDto) {
    return this.SingupService.singup(singupuser);
  }
}
