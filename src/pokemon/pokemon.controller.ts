import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreatePokemonDTO } from './pokemon.dto';
import { Pokemon } from './pokemon.model';
import { PokemonService } from './pokemon.service';

const pokemons: Pokemon[] = [
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
  constructor(private pokemonService: PokemonService) {}

  @Get(':id')
  getPokemon(@Param('id') id: string) {
    return this.pokemonService.getPokemon(id);
  }

  @Get()
  getPokemons() {
    return this.pokemonService.getPokemons();
  }

  @Post()
  postPokemon(@Body() pokemonToAdd: CreatePokemonDTO) {
    this.pokemonService.addPokemon(pokemonToAdd);
    return pokemonToAdd;
  }

  @Delete(':id')
  deletePokemon(@Param('id') id: string) {
    return this.pokemonService.deletePokemon(id);
  }
}
