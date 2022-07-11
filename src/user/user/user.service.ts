import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/user.dto';
import { v4 as uuidv4 } from 'uuid';
import * as db from '../../db/db';
@Injectable()
export class UserService {
  getall() {
    return db.user;
  }
  create(CreateUserDto: CreateUserDto) {
    db.user.push({
      ...CreateUserDto,
      id: uuidv4(),
      version: 0,
      createdAt: new Date().toString(), // timestamp of creation
      updatedAt: new Date().toString(),
    });
  }
  getById(id: string) {
    console.log(id);
    return db.user.find((item) => item.id === id);
  }
}
