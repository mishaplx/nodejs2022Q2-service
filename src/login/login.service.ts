import { Injectable, HttpCode } from '@nestjs/common';
import * as db from '../db/db';
import { uid } from 'rand-token';

@Injectable()
export class LoginService {
 
  async singup(loginUser) {
    const user = await loginUser

    const token = uid(12);
    token = token;
    return { token: token };
  }
}
