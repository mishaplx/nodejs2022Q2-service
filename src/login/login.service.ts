import { SingupEntity } from './../entitys/singup.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../user/dto/user.dto';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

dotenv.config();

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(SingupEntity)
    private userRep: Repository<SingupEntity>,
    private readonly jwtService: JwtService,
  ) {}
  async login(loginUser: CreateUserDto) {
    const user = await this.userRep.findBy({ login: loginUser.login });
    if (user.length) {
      const match = await bcrypt.compare(loginUser.password, user[0].password);
      if (match) {
        return {
          token: await this.jwtService.sign(
            {
              id: user[0].id,
              login: user[0].login,
              password: user[0].password,
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
