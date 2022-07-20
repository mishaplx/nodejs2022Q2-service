import { AtristService } from './atrists/atrist.service';
import { CreateArtistDto } from './dto/artist.dto';
import { UpdateArtistDto } from './dto/update.dto';
export declare class ArtistController {
    private readonly artistservice;
    constructor(artistservice: AtristService);
    getall(): any[];
    getById(id: string): any;
    create(createArtist: CreateArtistDto): Promise<{
        id: string;
        name: string;
        grammy: boolean;
    }>;
    delUser(id: string): false | any[];
    updateTrack(id: string, UpdateArtistdto: UpdateArtistDto): Promise<any>;
}
