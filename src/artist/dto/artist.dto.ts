//"name": "Freddie Mercury",
// "grammy": false

import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateArtistDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsBoolean()
  @IsOptional()
  grammy: boolean;
}
