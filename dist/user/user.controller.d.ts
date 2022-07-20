import { CreateUserDto } from './dto/user.dto';
import { UpdatePasswordDto } from './dto/update.dto';
import { UserService } from './user/user.service';
export declare class UserController {
    readonly Userservice: UserService;
    constructor(Userservice: UserService);
    getall(): any[];
    create(createuser: CreateUserDto): Promise<{
        id: string;
        password: string;
        version: number;
        createdAt: string;
        updatedAt: string;
        login: string;
    }>;
    getById(id: string): any;
    updatePass(id: string, updatePassdto: UpdatePasswordDto): Promise<any>;
    delUser(id: string): false | any[];
}
