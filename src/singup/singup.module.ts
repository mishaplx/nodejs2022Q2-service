import { SingupController } from './singup.controller';
import { Module } from '@nestjs/common';
import { SingupService } from './singup.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SingupEntity } from '../entitys/singup.entity';
@Module({
  imports: [TypeOrmModule.forFeature([SingupEntity])],
  controllers: [SingupController],
  providers: [SingupService],
})
export class SingupModule {}
