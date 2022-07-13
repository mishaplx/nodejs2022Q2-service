import { Artist } from 'src/artist/shemas/artist.shemas';
import { Album } from 'src/album/shemas/album.shema';
import { Track } from 'src/track/shemas/track.shemas';
export class Favs {
  artists: Artist[];
  albums: Album[];
  tracks: Track[];
}
