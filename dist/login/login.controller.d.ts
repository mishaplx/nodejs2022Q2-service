import { LoginService } from './login.service';
import { CreateUserDto } from '../user/dto/user.dto';
export declare class LoginController {
    private readonly Loginservice;
    constructor(Loginservice: LoginService);
    login(loginUser: CreateUserDto): Promise<{
        token: string;
    }>;
}
