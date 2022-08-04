import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { SingupModule } from './singup/singup.module';
import { LoginModule } from './login/login.module';
import { TrackModule } from './track/track/track.module';
import { UserModule } from './user/user/user.module';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { AldumModule } from './album/album/aldum.module';
import { ArtistModule } from './artist/artists/artist.module';
import { FavsModule } from './favs/favs/favs.module';
import * as dotenv from 'dotenv';
import { getEnvPath } from './env.helper';
import { AuthModule } from './auth/auth.module';
import { TypeOrmConfigService } from './db/database.module';
dotenv.config();
const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    UserModule,
    TrackModule,
    AldumModule,
    ArtistModule,
    FavsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
