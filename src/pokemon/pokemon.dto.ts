import { IsNumber, IsString, Min, min, MinLength } from 'class-validator';
import { Pokemon } from './pokemon.model';

export class CreatePokemonDTO implements Pokemon {
  @IsString()
  @MinLength(1)
  id: string;

  @IsString()
  @MinLength(1)
  name: string;

  @IsNumber()
  @Min(1)
  speed: number;

  @IsNumber()
  @Min(1)
  attack: number;

  @IsNumber()
  @Min(50)
  hp: number;
}
