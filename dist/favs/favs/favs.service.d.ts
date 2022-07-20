export declare class FavsService {
    gelAll(): Promise<{
        artist: any[];
        album: any[];
        track: any[];
    }>;
    addTrack(id: any): Promise<void>;
    addAlbum(id: any): Promise<void>;
    addArtist(id: any): Promise<void>;
    deleteTrack(id: any): Promise<void>;
    deleteAlbum(id: any): Promise<void>;
    deleteArtist(id: any): Promise<void>;
}
