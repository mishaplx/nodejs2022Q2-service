import { IUserResponce } from './interface/userInterface';
import { CreateUserDto } from './dto/user.dto';
import { UpdatePasswordDto } from './dto/update.dto';
import { UserService } from './user/user.service';
import { ErrorHandler } from 'src/errorhandler/error.handler';
export declare class UserController {
    readonly Userservice: UserService;
    error: ErrorHandler;
    constructor(Userservice: UserService);
    getall(): Promise<import("../entitys/user.entity").UserEntity[]>;
    create(createuser: CreateUserDto): Promise<IUserResponce>;
    getById(id: string): void | Promise<import("../entitys/user.entity").UserEntity>;
    update(id: string, updatePasswordDto: UpdatePasswordDto): Promise<void | IUserResponce>;
    delete(id: string): Promise<string | void>;
}
