import { JwtService } from '@nestjs/jwt';
import { SingupEntity } from './../entitys/singup.entity';
import { LoginService } from './services/login.service';
import { LoginController } from './controller/login.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import * as dotenv from 'dotenv';
dotenv.config();
@Module({
  imports: [TypeOrmModule.forFeature([SingupEntity])],

  controllers: [LoginController],
  providers: [LoginService, JwtService],
})
export class LoginModule {}
