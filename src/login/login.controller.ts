import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateUserDto } from '../user/dto/user.dto';
@Controller('login')
export class LoginController {
  constructor(private readonly Loginservice: LoginService) {}
  @Post()
  login(@Body() loginUser: CreateUserDto) {
    return this.Loginservice.singup(loginUser);
  }
}
