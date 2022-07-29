import { SingupEntity } from './../entitys/singup.entity';
import { CreateUserDto } from '../user/dto/user.dto';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
export declare class LoginService {
    private userRep;
    private readonly jwtService;
    constructor(userRep: Repository<SingupEntity>, jwtService: JwtService);
    login(loginUser: CreateUserDto): Promise<{
        token: string;
    }>;
    verify(token: any): Promise<any>;
}
