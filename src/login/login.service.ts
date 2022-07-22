import { UserEntity } from './../entitys/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../user/dto/user.dto';
import { Repository } from 'typeorm';

////////////////////////////////////////////// 'возвращаеет токен
dotenv.config();

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(UserEntity)
    private userRep: Repository<UserEntity>,
  ) {}
  async singup(loginUser: CreateUserDto) {
    const user = this.userRep.findBy({ login: loginUser.login });
    console.log(user);
    //private jwtService: JwtService,
    // const user = () => db.user.find((item) => item.login === loginUser.login);
    // console.log(user);

    // const currentUser = user();

    // if (currentUser) {
    //   const match = await bcrypt.compare(
    //     loginUser.password,
    //     currentUser.password,
    //   );
    //   if (match) {
    //     return {
    //       token: await this.jwtService.sign(
    //         {
    //           id: currentUser.id,
    //           login: currentUser.firstName,
    //           password: currentUser.password,
    //         },
    //         {
    //           secret: process.env.JWT_SECRET_KEY,
    //         },
    //       ),
    //     };
    //   }
    // }
  }
   async verify(token) {
    //  return this.jwtService.verifyAsync(token, {
    //    secret: process.env.JWT_SECRET_KEY,
    //  });
   }
}
