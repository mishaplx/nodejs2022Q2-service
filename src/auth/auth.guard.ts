import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard, IAuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { UserEntity } from '../entitys/user.entity';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') implements IAuthGuard {
  public handleRequest(err: unknown, user: UserEntity): any {
    //console.log(err);

    return user;
  }

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    await super.canActivate(context);

    const { user }: Request = context.switchToHttp().getRequest();

    const bool = user ? true : false;
    console.log('booool ----- ', bool);

    return bool;
  }
}
