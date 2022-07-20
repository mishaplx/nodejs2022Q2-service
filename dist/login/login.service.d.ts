import { CreateUserDto } from '../user/dto/user.dto';
import { JwtService } from '@nestjs/jwt';
export declare class LoginService {
    private jwtService;
    constructor(jwtService: JwtService);
    singup(loginUser: CreateUserDto): Promise<{
        token: string;
    }>;
    verify(token: any): Promise<any>;
}
