import { CreateUserDto } from '../dto/user.dto';
import { UpdatePasswordDto } from '../dto/update.dto';
export declare class UserService {
    user: any[];
    getall(): any[];
    create(CreateUserDto: CreateUserDto): Promise<{
        id: string;
        password: string;
        version: number;
        createdAt: string;
        updatedAt: string;
        login: string;
    }>;
    getById(id: string): any;
    updatePass(id: string, updatePassdto: UpdatePasswordDto): Promise<any>;
    deleteUser(id: string): false | any[];
}
