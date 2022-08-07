import { AlbumDto } from './dto/allAlbum.dto';
import { ErrorHandler } from 'src/errorhandler/error.handler';
import { AlbumService } from './album/album.service';
import { CreateAlbumDto } from './dto/album.dto';
import { UpdateAlbumDto } from './dto/update.dto';
export declare class AlbumController {
    private readonly Albumservice;
    error: ErrorHandler;
    constructor(Albumservice: AlbumService);
    getall(): Promise<import("../entitys/album.entity").AlbumEntity[]>;
    getById(id: string): Promise<void | AlbumDto>;
    create(createAlbum: CreateAlbumDto): Promise<AlbumDto>;
    delUser(id: string): Promise<import("typeorm").DeleteResult>;
    updateTrack(id: string, UpdateAldto: UpdateAlbumDto): Promise<import("typeorm").UpdateResult>;
}
