// export class CreateTrackrDto {
//   name: string;
//   artistId: string;
//   albumId: string;
//   duration: number;
// }
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTrackrDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  artistId: string;

  @IsString()
  @IsOptional()
  albumId: string;

  @IsNumber()
  @IsOptional()
  duration: number;
}
