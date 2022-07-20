import { CreateTrackrDto } from '../dto/track.dto';
import { UpdateTrackDto } from '../dto/update.dto';
export declare class TrackService {
    track: any[];
    getall(): any[];
    getById(id: string): any;
    create(CreateTrackrDto: CreateTrackrDto): Promise<{
        id: string;
        name: string;
        artistId: string;
        albumId: string[];
        duration: number;
    }>;
    delete(id: string): false | any[];
    update(id: string, UpdateTrackDto: UpdateTrackDto): Promise<any>;
}
