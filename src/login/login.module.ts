import { SingupEntity } from './../entitys/singup.entity';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([SingupEntity]),
    JwtModule.register({ secret: process.env.JWT_SECRET_KEY }),
  ],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
