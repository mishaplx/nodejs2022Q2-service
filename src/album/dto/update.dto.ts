import { IsNumber, IsOptional, IsString } from 'class-validator';
/**
 *  name: string;
  year: number;
  artistId: string | null; 
 */
export class UpdateAlbumDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsNumber()
  @IsOptional()
  year: number;

  @IsString()
  @IsOptional()
  artistId;
}
