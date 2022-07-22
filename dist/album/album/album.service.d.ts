import { CreateAlbumDto } from '../dto/album.dto';
import { UpdateAlbumDto } from '../dto/update.dto';
import { Repository } from 'typeorm';
import { AlbumEntity } from 'src/entitys/album.entity';
import { AlbumDto } from '../dto/allAlbum.dto';
export declare class AlbumService {
    private AlbumRepository;
    constructor(AlbumRepository: Repository<AlbumEntity>);
    getall(): Promise<AlbumEntity[]>;
    getById(id: string): Promise<AlbumDto>;
    create(CreateAlbumDto: CreateAlbumDto): Promise<AlbumEntity>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
    update(id: string, UpdateAlbumDto: UpdateAlbumDto): Promise<import("typeorm").UpdateResult>;
}
