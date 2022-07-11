import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/user.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  private user = [];
  getall() {
    return this.user;
  }
  create(CreateUserDto: CreateUserDto) {
    this.user.push({
      ...CreateUserDto,
      id: uuidv4(),
      version: 0,
      createdAt: new Date().toString(), // timestamp of creation
      updatedAt: new Date().toString(),
    });
  }
  getById(id: string) {
    console.log(id);
    return this.user.find((item) => item.id === id);
  }
}
