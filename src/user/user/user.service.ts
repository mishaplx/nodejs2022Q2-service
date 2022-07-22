import { ErrorHandler } from './../../errorhandler/error.handler';
import { IUserResponce } from './../interface/userInterface';
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
  error = new ErrorHandler();
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}
  userResponce: IUserResponce = {
    id: 'id',
    login: '',
    version: 1,
    updatedAt: 1,
    createdAt: 1,
  };
  findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }
  async create(CreateUserDto: CreateUserDto): Promise<IUserResponce> {
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
    for (const key in newUser) {
      if (key !== 'password') {
        this.userResponce[key] = newUser[key];
      }
    }
    return this.userResponce;
  }
  async getById(id: string): Promise<UserEntity> {
    const UserById = await this.userRepository.findBy({ id: id });
    return UserById[0];
  }

  async updatePass(id: string, updatePassdto: UpdatePasswordDto) {
    const user = await this.userRepository.findBy({ id: id });
    const allUser = await this.findAll();
    console.log(user);
    if (!user) {
      return this.error.notFound('user');
    } else {
      allUser.map((User) => {
        if (User.id === id) {
          if (User.password !== updatePassdto.oldPassowrd) {
            return this.error.notMatch();
          }
          User.password = updatePassdto.newPassword;
          User.version += 1;
          User.updatedAt = Date.now().toString();

          for (const key in User) {
            if (key !== 'password') {
              this.userResponce[key] = User[key];
            }
          }
        }
      });
      return this.userResponce;
    }
  }

  deleteUser(id: string): string | void {
    const user = this.userRepository.delete({ id: id });
    return !!user ? this.error.deleted('user') : null;
  }
}
