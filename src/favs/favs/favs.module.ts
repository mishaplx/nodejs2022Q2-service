import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { FavsEntity } from 'src/entitys/favs.entity';
import { FavsController } from '../favs.controller';
import { FavsService } from './favs.service';

@Module({
  imports: [TypeOrmModule.forFeature([FavsEntity])],
  controllers: [FavsController],
  providers: [FavsService],
})
export class FavsModule {}
