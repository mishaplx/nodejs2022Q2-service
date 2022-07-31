import { SingupModule } from './singup/singup.module';
import { LoginModule } from './login/login.module';
import { TrackModule } from './track/track/track.module';
import { UserModule } from './user/user/user.module';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { DatabaseModule } from './db/database.module';
import { AldumModule } from './album/album/aldum.module';
import { ArtistModule } from './artist/artists/artist.module';
import { FavsModule } from './favs/favs/favs.module';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
dotenv.config();

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
    LoginModule,
    SingupModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
