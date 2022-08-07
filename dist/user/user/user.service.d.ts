import { UserEntity } from './../../entitys/user.entity';
import { CreateUserDto } from '../dto/user.dto';
import { UpdatePasswordDto } from '../dto/update.dto';
import { Repository } from 'typeorm';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    getall(): Promise<UserEntity[]>;
    create(CreateUserDto: CreateUserDto): Promise<UserEntity>;
    getById(id: string): Promise<UserEntity>;
    updatePass(id: string, updatePassdto: UpdatePasswordDto): Promise<UserEntity[]>;
    deleteUser(id: string): Promise<import("typeorm").DeleteResult>;
}
