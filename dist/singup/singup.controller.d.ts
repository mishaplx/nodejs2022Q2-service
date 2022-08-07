import { ErrorHandler } from './../errorhandler/error.handler';
import { CreateUserDto } from '../user/dto/user.dto';
import { SingupService } from './singup.service';
export declare class SingupController {
    private readonly singupService;
    error: ErrorHandler;
    constructor(singupService: SingupService);
    singup(singupuser: CreateUserDto): Promise<import("../entitys/singup.entity").SingupEntity>;
}
