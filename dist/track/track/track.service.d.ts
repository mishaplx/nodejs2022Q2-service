import { TrackDto } from './../dto/track.dto';
import { TrackEntity } from './../../entitys/track.entity';
import { CreateTrackDto } from '../dto/create-track.dto';
import { UpdateTrackDto } from '../dto/update-track.dto';
import { Repository } from 'typeorm';
export declare class TrackService {
    private TrackRepository;
    constructor(TrackRepository: Repository<TrackEntity>);
    getall(): Promise<TrackEntity[]>;
    findOne(id: string): Promise<TrackEntity>;
    create(CreateTrackrDto: CreateTrackDto): Promise<TrackEntity>;
    delete(id: string): Promise<string>;
    update(id: string, params: UpdateTrackDto): Promise<TrackDto>;
}
