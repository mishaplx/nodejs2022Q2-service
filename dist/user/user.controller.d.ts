import { CreateUserDto } from './dto/user.dto';
import { UpdatePasswordDto } from './dto/update.dto';
import { UserService } from './user/user.service';
export declare class UserController {
    readonly Userservice: UserService;
    constructor(Userservice: UserService);
    getall(): Promise<import("../entitys/user.entity").UserEntity[]>;
    create(createuser: CreateUserDto): Promise<import("../entitys/user.entity").UserEntity>;
    getById(id: string): Promise<import("../entitys/user.entity").UserEntity[]>;
    updatePass(id: string, updatePassdto: UpdatePasswordDto): Promise<boolean | import("../entitys/user.entity").UserEntity[]>;
    delUser(id: string): Promise<import("typeorm").DeleteResult>;
}
