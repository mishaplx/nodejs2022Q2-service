import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';

import { UserService } from './user/user/user.service';
import { SingupController } from './singup/singup.controller';
import { SingupService } from './singup/singup.service';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    UserController,
    SingupController,
    LoginController,
  ],
  providers: [AppService, UserService, SingupService, LoginService],
})
export class AppModule {}
