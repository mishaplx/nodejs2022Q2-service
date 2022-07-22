import { UserEntity } from './../../entitys/user.entity';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/user.dto';
import { UpdatePasswordDto } from '../dto/update.dto';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}
  getall(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }
  async create(CreateUserDto: CreateUserDto) {
    const newUser = {
      ...CreateUserDto,
      id: uuidv4(),
      password: await bcrypt.hash(CreateUserDto.password, 10),
      version: 0,
      createdAt: new Date().toString(), // timestamp of creation
      updatedAt: new Date().toString(),
    };
    const newUserSave = await this.userRepository.create(newUser);
    await this.userRepository.save(newUserSave);
    return newUserSave;
  }
  async getById(id: string): Promise<UserEntity> {
    const UserById = await this.userRepository.findBy({ id: id });
    console.log(UserById);
    return UserById[0];
  }

  async updatePass(id: string, updatePassdto: UpdatePasswordDto) {
    const user = await this.userRepository.findBy({ id: id });
    console.log(user);
    const check = async function (updatePassdto) {
      const match = await bcrypt.compare(
        updatePassdto.oldPassowrd,
        user[0].password,
      );

      return match;
    };
    const checkFlag = check(updatePassdto);
    if (checkFlag) {
      const nerPass = await bcrypt.hash(updatePassdto.newPassword, 10);
      this.userRepository.update(
        { password: user[0].password },
        { password: nerPass },
      );

      return user;
    }
  }
  deleteUser(id: string) {
    const deleteUser = this.userRepository.delete({ id: id });
    return deleteUser;
  }
}
