import { TrackService } from './track/track.service';
import { CreateTrackrDto } from './dto/track.dto';
import { UpdateTrackDto } from './dto/update.dto';
export declare class TrackController {
    private readonly Trackservice;
    constructor(Trackservice: TrackService);
    getall(): Promise<import("../entitys/track.entity").TrackEntity[]>;
    getById(id: string): Promise<import("../entitys/track.entity").TrackEntity[]>;
    create(createTrack: CreateTrackrDto): Promise<import("../entitys/track.entity").TrackEntity>;
    delTrack(id: string): Promise<import("typeorm").DeleteResult>;
    updateTrack(id: string, UpdateTrackdto: UpdateTrackDto): Promise<import("typeorm").UpdateResult>;
}
