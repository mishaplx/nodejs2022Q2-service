import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/user.dto';
import { UpdatePasswordDto } from '../dto/update.dto';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import * as db from '../../db/db';
@Injectable()
export class UserService {
  user = db.user;
  getall() {
    return db.user;
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
    db.user.push(newUser);
    return newUser;
  }
  getById(id: string) {
    return db.user.find((item) => item.id === id);
  }

  async updatePass(id: string, updatePassdto: UpdatePasswordDto) {
    const user = db.user.find((item) => item.id === id);
    const check = async function (updatePassdto) {
      console.log(updatePassdto);
      const match = await bcrypt.compare(
        updatePassdto.oldPassowrd,
        user.password,
      );

      return match;
    };
    const checkFlag = check(updatePassdto);
    if (checkFlag) {
      user.password = await bcrypt.hash(updatePassdto.newPassword, 10);
      return user;
    } else {
      return !checkFlag;
    }
  }
  deleteUser(id: string) {
    const newArr = db.user.filter((item) => item.id !== id);
    console.log(newArr);
    this.user = newArr;
    if (this.user.length == db.user.length) {
      return false;
    } /// не изменяет значение в db
    return this.user;
  }
}
