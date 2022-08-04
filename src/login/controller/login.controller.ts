import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from '../services/login.service';
import { CreateUserDto } from '../../user/dto/user.dto';

@Controller('auth')
export class LoginController {
  constructor(private readonly Loginservice: LoginService) {}
  @Post('login')
  login(@Body() loginUser: CreateUserDto) {
    return this.Loginservice.login(loginUser);
  }
}
