import { SingupEntity } from './../entitys/singup.entity';
import { CreateUserDto } from '../user/dto/user.dto';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
export declare class LoginService {
    private userRep;
    private jwtService;
    constructor(userRep: Repository<SingupEntity>, jwtService: JwtService);
    validateUser(userDto: CreateUserDto): Promise<any>;
    login(userDto: CreateUserDto): Promise<{
        access_token: string;
    }>;
}
