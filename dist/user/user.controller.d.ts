import { CreateUserDto } from './dto/user.dto';
import { UpdatePasswordDto } from './dto/update.dto';
import { UserService } from './user/user.service';
import { ErrorHandler } from 'src/errorhandler/error.handler';
export declare class UserController {
    readonly Userservice: UserService;
    error: ErrorHandler;
    constructor(Userservice: UserService);
    getall(): Promise<import("../entitys/user.entity").UserEntity[]>;
    create(createuser: CreateUserDto): Promise<import("../entitys/user.entity").UserEntity>;
    getById(id: string): void | Promise<import("../entitys/user.entity").UserEntity>;
    updatePass(id: string, updatePassdto: UpdatePasswordDto): Promise<import("../entitys/user.entity").UserEntity[]>;
    delUser(id: string): Promise<void | import("typeorm").DeleteResult>;
}
