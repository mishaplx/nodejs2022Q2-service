import { ArtistEntity } from './../../entitys/artist.entity';
import { CreateArtistDto } from '../dto/artist.dto';
import { UpdateArtistDto } from '../dto/update.dto';
import { Repository } from 'typeorm';
export declare class AtristService {
    private ArtistRepository;
    constructor(ArtistRepository: Repository<ArtistEntity>);
    getall(): Promise<ArtistEntity[]>;
    getById(id: string): Promise<ArtistEntity[]>;
    create(CreateArtist: CreateArtistDto): Promise<ArtistEntity>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
    update(id: string, UpdateArtistDto: UpdateArtistDto): Promise<import("typeorm").UpdateResult>;
}
