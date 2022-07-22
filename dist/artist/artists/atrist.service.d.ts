import { ArtistDto } from './../dto/artist.tdo';
import { TrackEntity } from './../../entitys/track.entity';
import { ErrorHandler } from './../../errorhandler/error.handler';
import { AlbumEntity } from './../../entitys/album.entity';
import { ArtistEntity } from './../../entitys/artist.entity';
import { CreateArtistDto } from '../dto/create-artist.dto';
import { UpdateArtistDto } from '../dto/update-artist.dto';
import { Repository } from 'typeorm';
export declare class AtristService {
    private ArtistRepository;
    private AlbumRepository;
    private TrackRepository;
    error: ErrorHandler;
    constructor(ArtistRepository: Repository<ArtistEntity>, AlbumRepository: Repository<AlbumEntity>, TrackRepository: Repository<TrackEntity>);
    getall(): Promise<ArtistEntity[]>;
    findOne(id: string): Promise<ArtistEntity>;
    create(CreateArtist: CreateArtistDto): Promise<any>;
    delete(id: string): Promise<string | void>;
    update(params: UpdateArtistDto, id: string): Promise<void | ArtistDto>;
}
