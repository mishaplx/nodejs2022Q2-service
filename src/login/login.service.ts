import { Injectable } from '@nestjs/common';
import * as db from '../db/db';
import * as dotenv from 'dotenv';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../user/dto/user.dto';
import { JwtService } from '@nestjs/jwt';

////////////////////////////////////////////// 'возвращаеет токен
dotenv.config();

@Injectable()
export class LoginService {
  constructor(private jwtService: JwtService) {}
  async singup(loginUser: CreateUserDto) {
    const user = () => db.user.find((item) => item.login === loginUser.login);
    const currentUser = user();

    if (currentUser) {
      const match = await bcrypt.compare(
        loginUser.password,
        currentUser.password,
      );
      console.log('loginUser.password----', loginUser.password);
      console.log('currentUser.password----', currentUser.password);
      if (match) {
        return {
          token: await this.jwtService.sign(
            {
              id: currentUser.id,
              login: currentUser.firstName,
              password: currentUser.password,
            },
            {
              secret: process.env.JWT_SECRET_KEY,
            },
          ),
        };
      }
    }
  }
  async verify(token) {
    return this.jwtService.verifyAsync(token, {
      secret: process.env.JWT_SECRET_KEY,
    });
  }
}
