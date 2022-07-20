import { CreateUserDto } from '../user/dto/user.dto';
import { SingupService } from './singup.service';
export declare class SingupController {
    private readonly singupService;
    constructor(singupService: SingupService);
    singup(singupuser: CreateUserDto): Promise<void>;
}
