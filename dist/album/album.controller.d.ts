import { IAlbum } from './interfaces/album.interface';
import { AlbumDto } from './dto/albums.dto';
import { ErrorHandler } from 'src/errorhandler/error.handler';
import { AlbumService } from './album/album.service';
import { CreateAlbumDto } from './dto/create-albums.dto';
import { UpdateAlbumDto } from './dto/update-albums.dto';
export declare class AlbumController {
    private readonly Albumservice;
    error: ErrorHandler;
    constructor(Albumservice: AlbumService);
    getall(): Promise<IAlbum[]>;
    getById(id: string): Promise<void | IAlbum>;
    create(createAlbum: CreateAlbumDto): Promise<AlbumDto>;
    delete(id: string): Promise<string | void>;
    update(id: string, updateAlbumDto: UpdateAlbumDto): Promise<void | IAlbum>;
}
