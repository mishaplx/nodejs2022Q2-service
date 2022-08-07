import { SingupEntity } from './../entitys/singup.entity';
import { CreateUserDto } from './../user/dto/user.dto';
import { Repository } from 'typeorm';
export declare class SingupService {
    private singupRepository;
    constructor(singupRepository: Repository<SingupEntity>);
    create(CreateUserDto: CreateUserDto): Promise<SingupEntity>;
}
