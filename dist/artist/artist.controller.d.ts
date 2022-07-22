import { IArtist } from './artists/interface/artist.intarface';
import { ErrorHandler } from './../errorhandler/error.handler';
import { AtristService } from './artists/atrist.service';
import { ArtistDto } from '../artist/dto/artist.tdo';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
export declare class ArtistController {
    private readonly artistservice;
    error: ErrorHandler;
    constructor(artistservice: AtristService);
    getall(): Promise<IArtist[]>;
    getById(id: string): Promise<void | ArtistDto>;
    create(createArtist: CreateArtistDto): Promise<IArtist>;
    delete(id: string): Promise<string | void>;
    update(id: string, updateArtistDto: UpdateArtistDto): Promise<IArtist | void>;
}
