import { AtristService } from './artists/atrist.service';
import { CreateArtistDto } from './dto/artist.dto';
import { UpdateArtistDto } from './dto/update.dto';
export declare class ArtistController {
    private readonly artistservice;
    constructor(artistservice: AtristService);
    getall(): Promise<import("../entitys/artist.entity").ArtistEntity[]>;
    getById(id: string): Promise<import("../entitys/artist.entity").ArtistEntity[]>;
    create(createArtist: CreateArtistDto): Promise<import("../entitys/artist.entity").ArtistEntity>;
    delUser(id: string): Promise<import("typeorm").DeleteResult>;
    updateTrack(id: string, UpdateArtistdto: UpdateArtistDto): Promise<import("typeorm").UpdateResult>;
}
