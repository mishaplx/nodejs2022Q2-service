import { CreateAlbumDto } from '../dto/album.dto';
import { UpdateAlbumDto } from '../dto/update.dto';
export declare class AlbumService {
    album: any[];
    getall(): any[];
    getById(id: string): any;
    create(CreateAlbumDto: CreateAlbumDto): Promise<{
        id: string;
        name: string;
        year: number;
        artistId: any;
    }>;
    delete(id: string): false | any[];
    update(id: string, UpdateAlbumDto: UpdateAlbumDto): Promise<any>;
}
