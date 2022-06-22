import { Controller, Get, Param } from '@nestjs/common';

type Pokemon = {
  id: string;
  name: string;
  speed: number;
  attack: number;
  hp: number;
};

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
  @Get(':id')
  getPokemon(@Param('id') id) {
    return pokemons.find((poke) => poke.id === id);
  }

  @Get()
  getPokemons() {
    return pokemons.map((poke) => poke.name);
  }
}
