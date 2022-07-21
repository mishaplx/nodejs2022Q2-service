import { AlbumService } from './album/album.service';
import { CreateAlbumDto } from './dto/album.dto';
import { UpdateAlbumDto } from './dto/update.dto';
export declare class AlbumController {
    private readonly Albumservice;
    constructor(Albumservice: AlbumService);
    getall(): Promise<import("../entitys/album.entity").AlbumEntity[]>;
    getById(id: string): Promise<import("../entitys/album.entity").AlbumEntity[]>;
    create(createAlbum: CreateAlbumDto): Promise<import("../entitys/album.entity").AlbumEntity>;
    delUser(id: string): Promise<import("typeorm").DeleteResult>;
    updateTrack(id: string, UpdateAldto: UpdateAlbumDto): Promise<import("typeorm").UpdateResult>;
}
