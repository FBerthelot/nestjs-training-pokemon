import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PokemonDTO } from './pokemon.dto';
import { PokemonService } from './pokemon.service';

@ApiTags('Pokemon')
@Controller('pokemon')
export class PokemonController {
  constructor(private pokemonService: PokemonService) {}

  @Get(':id')
  getPokemon(@Param('id') id: string): Promise<PokemonDTO> {
    return this.pokemonService.getPokemon(id);
  }

  @Get()
  getPokemons(): string[] {
    return this.pokemonService.getPokemons();
  }

  @Post()
  postPokemon(@Body() pokemonToAdd: PokemonDTO): PokemonDTO {
    this.pokemonService.addPokemon(pokemonToAdd);
    return pokemonToAdd;
  }

  @Delete(':id')
  deletePokemon(@Param('id') id: string): void {
    return this.pokemonService.deletePokemon(id);
  }
}
