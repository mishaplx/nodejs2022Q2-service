import { TrackEntity } from './../../entitys/track.entity';
import { CreateTrackrDto } from '../dto/track.dto';
import { UpdateTrackDto } from '../dto/update.dto';
import { Repository } from 'typeorm';
export declare class TrackService {
    private TrackRepository;
    constructor(TrackRepository: Repository<TrackEntity>);
    getall(): Promise<TrackEntity[]>;
    getById(id: string): Promise<TrackEntity[]>;
    create(CreateTrackrDto: CreateTrackrDto): Promise<TrackEntity>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
    update(id: string, UpdateTrackDto: UpdateTrackDto): Promise<import("typeorm").UpdateResult>;
}
