import { TrackEntity } from './../../entitys/track.entity';
import { ErrorHandler } from './../../errorhandler/error.handler';
import { IAlbum } from './../interfaces/album.interface';
import { CreateAlbumDto } from '../dto/create-albums.dto';
import { UpdateAlbumDto } from '../dto/update-albums.dto';
import { Repository } from 'typeorm';
import { AlbumEntity } from 'src/entitys/album.entity';
export declare class AlbumService {
    private AlbumRepository;
    private TrackRepository;
    error: ErrorHandler;
    constructor(AlbumRepository: Repository<AlbumEntity>, TrackRepository: Repository<TrackEntity>);
    getall(): Promise<IAlbum[]>;
    getById(id: string): Promise<IAlbum>;
    create(CreateAlbumDto: CreateAlbumDto): Promise<AlbumEntity>;
    delete(id: string): Promise<void>;
    update(UpdateAlbumDto: UpdateAlbumDto, id: string): Promise<void | IAlbum>;
}
