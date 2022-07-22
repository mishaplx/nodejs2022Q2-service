import { ErrorHandler } from './../../errorhandler/error.handler';
import { IUserResponce } from './../interface/userInterface';
import { UserEntity } from './../../entitys/user.entity';
import { CreateUserDto } from '../dto/user.dto';
import { UpdatePasswordDto } from '../dto/update.dto';
import { Repository } from 'typeorm';
export declare class UserService {
    private userRepository;
    error: ErrorHandler;
    constructor(userRepository: Repository<UserEntity>);
    userResponce: IUserResponce;
    findAll(): Promise<UserEntity[]>;
    create(CreateUserDto: CreateUserDto): Promise<IUserResponce>;
    getById(id: string): Promise<UserEntity>;
    updatePass(id: string, updatePassdto: UpdatePasswordDto): Promise<void | IUserResponce>;
    deleteUser(id: string): string | void;
}
