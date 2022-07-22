import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { UserEntity } from './../entitys/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
