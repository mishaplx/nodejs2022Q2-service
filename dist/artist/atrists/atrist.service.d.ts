import { CreateArtistDto } from '../dto/artist.dto';
import { UpdateArtistDto } from '../dto/update.dto';
export declare class AtristService {
    artist: any[];
    getall(): any[];
    getById(id: string): any;
    create(CreateArtist: CreateArtistDto): Promise<{
        id: string;
        name: string;
        grammy: boolean;
    }>;
    delete(id: string): false | any[];
    update(id: string, UpdateArtistDto: UpdateArtistDto): Promise<any>;
}
