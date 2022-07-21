import { FavsEntity } from './../../entitys/favs.entity';
import { Repository } from 'typeorm';
export declare class FavsService {
    private FavsRepository;
    constructor(FavsRepository: Repository<FavsEntity>);
    gelAll(): Promise<FavsEntity[]>;
    addTrack(id: string): Promise<any>;
    addAlbum(id: any): Promise<void>;
    addArtist(id: any): Promise<void>;
    deleteTrack(id: any): Promise<void>;
    deleteAlbum(id: any): Promise<void>;
    deleteArtist(id: any): Promise<void>;
}
