import { FavsService } from './favs/favs.service';
export declare class FavsController {
    private Favservice;
    constructor(Favservice: FavsService);
    getAll(): Promise<{
        artist: any[];
        album: any[];
        track: any[];
    }>;
    addTrack(id: string): Promise<void>;
    addAlbum(id: string): Promise<void>;
    addArtist(id: string): Promise<void>;
    deleteTrack(id: string): Promise<void>;
    deleteAlbum(id: string): Promise<void>;
    deleteArtist(id: string): Promise<void>;
}
