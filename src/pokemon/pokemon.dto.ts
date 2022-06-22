import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Min, min, MinLength } from 'class-validator';
import { Pokemon } from './pokemon.model';

export class PokemonDTO implements Pokemon {
  @ApiProperty({
    minLength: 1,
  })
  @IsString()
  @MinLength(1)
  id: string;

  @ApiProperty({
    minLength: 1,
  })
  @IsString()
  @MinLength(1)
  name: string;

  @ApiProperty({
    minLength: 1,
  })
  @IsNumber()
  @Min(1)
  speed: number;

  @ApiProperty({
    minLength: 1,
  })
  @IsNumber()
  @Min(1)
  attack: number;

  @ApiProperty({
    minLength: 50,
  })
  @IsNumber()
  @Min(50)
  hp: number;
}
