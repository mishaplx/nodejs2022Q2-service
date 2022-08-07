import { IsNumber, IsOptional, IsString } from 'class-validator';
/**
 *  name: string;
  year: number;
  artistId: string | null; 
 */
export class CreateAlbumDto {
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
