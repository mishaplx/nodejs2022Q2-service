import { SingupEntity } from '../../entitys/singup.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { CreateUserDto } from '../../user/dto/user.dto';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
dotenv.config();

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(SingupEntity)
    private userRep: Repository<SingupEntity>,
    private jwtService: JwtService,
  ) {}
  async validateUser(userDto: CreateUserDto): Promise<any> {
    const user = await this.userRep.findOneBy({ login: userDto.login });
    const validPass = await bcrypt.compare(userDto.password, user.password);
    console.log(validPass);

    if (user && validPass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(userDto: CreateUserDto) {
    const payload = { username: userDto.login, sub: 1 };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
