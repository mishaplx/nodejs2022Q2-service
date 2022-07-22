export declare class FavsService {
    gelAll(): Promise<void>;
    addTrack(id: string): Promise<void>;
    addAlbum(id: any): Promise<void>;
    addArtist(id: any): Promise<void>;
    deleteTrack(id: any): Promise<void>;
    deleteAlbum(id: any): Promise<void>;
    deleteArtist(id: any): Promise<void>;
}
