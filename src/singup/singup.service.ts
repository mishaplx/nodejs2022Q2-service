import { Injectable } from '@nestjs/common';
import * as db from '../db/db';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';
@Injectable()
export class SingupService {
  async singup(singupuser) {
    const newUser = {
      ...singupuser,
      password: await bcrypt.hash(singupuser.password, 10),
      id: uuidv4(),
      version: 0,
      createdAt: new Date().toString(), // timestamp of creation
      updatedAt: new Date().toString(),
    };
    db.user.push(newUser);
  }
}
