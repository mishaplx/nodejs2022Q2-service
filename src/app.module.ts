import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from './user/user/user.service';
import { SingupService } from './singup/singup.service';
import { LoginService } from './login/login.service';
import { TrackService } from './track/track/track.service';
import { AtristService } from './artist/atrists/atrist.service';
import { AlbumService } from './album/album/album.service';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { SingupController } from './singup/singup.controller';
import { LoginController } from './login/login.controller';
import { TrackController } from './track/track.controller';
import { ArtistController } from './artist/artist.controller';
import { AlbumController } from './album/album.controller';
import { FavsController } from './favs/favs.controller';
import { FavsService } from './favs/favs/favs.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    UserController,
    SingupController,
    LoginController,
    TrackController,
    ArtistController,
    AlbumController,
    FavsController,
  ],
  providers: [
    AppService,
    UserService,
    SingupService,
    LoginService,
    JwtService,
    TrackService,
    AtristService,
    AlbumService,
    FavsService,
  ],
})
export class AppModule {}
