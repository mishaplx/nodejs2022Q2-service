import { SingupController } from './controller/singup.controller';
import { Module } from '@nestjs/common';
import { SingupService } from './services/singup.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SingupEntity } from '../entitys/singup.entity';
@Module({
  imports: [TypeOrmModule.forFeature([SingupEntity])],
  controllers: [SingupController],
  providers: [SingupService],
})
export class SingupModule {}
