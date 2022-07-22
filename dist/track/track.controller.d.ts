import { ITrack } from './interfaces/track.interface';
import { TrackDto } from './dto/track.dto';
import { ErrorHandler } from './../errorhandler/error.handler';
import { TrackService } from './track/track.service';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { TrackEntity } from '../entitys/track.entity';
export declare class TrackController {
    private readonly Trackservice;
    error: ErrorHandler;
    constructor(Trackservice: TrackService);
    getall(): Promise<TrackEntity[]>;
    getById(id: string): Promise<void | TrackDto>;
    create(createTrackDto: CreateTrackDto): Promise<ITrack>;
    delete(id: string): Promise<string | void>;
    update(id: string, updateTrackDto: UpdateTrackDto): Promise<void | TrackDto>;
}
