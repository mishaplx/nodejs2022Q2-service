import { TrackModule } from './track/track/track.module';
import { UserModule } from './user/user/user.module';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { SingupService } from './singup/singup.service';
import { LoginService } from './login/login.service';
import { AtristService } from './artist/artists/atrist.service';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SingupController } from './singup/singup.controller';
import { LoginController } from './login/login.controller';
import { ArtistController } from './artist/artist.controller';
import { FavsController } from './favs/favs.controller';
import { FavsService } from './favs/favs/favs.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { DatabaseModule } from './db/database.module';
import { AldumModule } from './album/album/aldum.module';
import { ArtistModule } from './artist/artists/artist.module';
import { FavsModule } from './favs/favs/favs.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
      }),
    }),
    DatabaseModule,
    UserModule,
    TrackModule,
    AldumModule,
    ArtistModule,
    FavsModule,
  ],
  controllers: [AppController, SingupController, LoginController],
  providers: [AppService, SingupService, LoginService, JwtService, FavsService],
})
export class AppModule {}
