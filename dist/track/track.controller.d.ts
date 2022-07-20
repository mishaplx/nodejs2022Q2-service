import { TrackService } from './track/track.service';
import { CreateTrackrDto } from './dto/track.dto';
import { UpdateTrackDto } from './dto/update.dto';
import { LoginService } from '../login/login.service';
export declare class TrackController {
    private readonly Trackservice;
    private Loginservice;
    constructor(Trackservice: TrackService, Loginservice: LoginService);
    getall(): any[];
    getById(id: string): any;
    create(createTrack: CreateTrackrDto, headers: any): Promise<{
        id: string;
        name: string;
        artistId: string;
        albumId: string[];
        duration: number;
    }>;
    delTrack(id: string): false | any[];
    updateTrack(id: string, UpdateTrackdto: UpdateTrackDto): Promise<any>;
}
