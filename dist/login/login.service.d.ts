import { UserEntity } from './../entitys/user.entity';
import { CreateUserDto } from '../user/dto/user.dto';
import { Repository } from 'typeorm';
export declare class LoginService {
    private userRep;
    constructor(userRep: Repository<UserEntity>);
    singup(loginUser: CreateUserDto): Promise<void>;
    verify(token: any): Promise<void>;
}
