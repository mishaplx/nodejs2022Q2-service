import { SingupEntity } from './../entitys/singup.entity';
import { CreateUserDto } from './../user/dto/user.dto';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class SingupService {
  constructor(
    @InjectRepository(SingupEntity)
    private singupRepository: Repository<SingupEntity>,
  ) {}
  async create(CreateUserDto: CreateUserDto) {
    const newUser = {
      ...CreateUserDto,
      id: uuidv4(),
      password: await bcrypt.hash(CreateUserDto.password, 10),
    };
    const newUserSave = await this.singupRepository.create(newUser);
    await this.singupRepository.save(newUserSave);
    return newUserSave;
  }
}
