import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreatePokemonDTO } from './pokemon.dto';
import { PokemonService } from './pokemon.service';

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
