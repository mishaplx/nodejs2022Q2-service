import { AlbumService } from './album/album.service';
import { CreateAlbumDto } from './dto/album.dto';
import { UpdateAlbumDto } from './dto/update.dto';
export declare class AlbumController {
    private readonly Albumservice;
    constructor(Albumservice: AlbumService);
    getall(): any[];
    getById(id: string): any;
    create(createAlbum: CreateAlbumDto): Promise<{
        id: string;
        name: string;
        year: number;
        artistId: any;
    }>;
    delUser(id: string): false | any[];
    updateTrack(id: string, UpdateAldto: UpdateAlbumDto): Promise<any>;
}
