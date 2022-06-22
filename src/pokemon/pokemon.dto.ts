import { Pokemon } from './pokemon.model';

export class CreatePokemonDTO implements Pokemon {
  id: string;
  name: string;
  speed: number;
  attack: number;
  hp: number;
}
