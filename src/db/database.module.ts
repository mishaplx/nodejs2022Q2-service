import { AlbumEntity } from './../entitys/album.entity';
import { TrackEntity } from './../entitys/track.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserEntity } from 'src/entitys/user.entity';
import { ArtistEntity } from 'src/entitys/artist.entity';
import { FavsEntity } from 'src/entitys/favs.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        entities: [
          UserEntity,
          TrackEntity,
          AlbumEntity,
          ArtistEntity,
          FavsEntity,
        ],
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
