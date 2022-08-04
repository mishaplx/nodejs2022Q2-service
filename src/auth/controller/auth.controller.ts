import {
  Body,
  Controller,
  Inject,
  Post,
  ClassSerializerInterceptor,
  UseInterceptors,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UserEntity } from '../../entitys/user.entity';
import { RegisterDto, LoginDto } from '../dto/auth.dto';
import { JwtAuthGuard } from '../auth.guard';
import { AuthService } from '../services/auth.service';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  @Inject(AuthService)
  private readonly service: AuthService;

  @Post('singup')
  @UseInterceptors(ClassSerializerInterceptor)
  private register(@Body() body: RegisterDto): Promise<UserEntity | never> {
    return this.service.register(body);
  }

  @Post('login')
  private login(@Body() body: LoginDto): Promise<string | never> {
    return this.service.login(body);
  }

  @Post('refresh')
  @UseGuards(JwtAuthGuard)
  private refresh(@Req() { user }: Request): Promise<string | never> {
    return this.service.refresh(<UserEntity>user);
  }
}
