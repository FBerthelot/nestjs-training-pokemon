import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreatePokemonDTO } from './pokemon.dto';
import { Pokemon } from './pokemon.model';

let pokemons: Pokemon[] = [
  {
    id: '1',
    name: 'pikachu',
    speed: 50,
    attack: 20,
    hp: 100,
  },
  {
    id: '2',
    name: 'salameche',
    speed: 40,
    attack: 10,
    hp: 100,
  },
  {
    id: '3',
    name: 'bulbizarre',
    speed: 30,
    attack: 50,
    hp: 100,
  },
];

@Controller('pokemon')
export class PokemonController {
  @Get(':id')
  getPokemon(@Param('id') id: string) {
    return pokemons.find((poke) => poke.id === id);
  }

  @Get()
  getPokemons() {
    return pokemons.map((poke) => poke.name);
  }

  @Post()
  postPokemon(@Body() pokemonToAdd: CreatePokemonDTO) {
    pokemons = [...pokemons, pokemonToAdd];
    return pokemonToAdd;
  }

  @Delete(':id')
  deletePokemon(@Param('id') id: string) {
    pokemons = pokemons.filter((poke) => poke.id !== id);
  }
}
