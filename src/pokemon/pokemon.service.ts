import { Injectable } from '@nestjs/common';
import { Pokemon } from './pokemon.model';

@Injectable()
export class PokemonService {
  pokemons: Pokemon[] = [
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

  getPokemon(id: string) {
    return this.pokemons.find((poke) => poke.id === id);
  }

  getPokemons() {
    return this.pokemons.map((poke) => poke.name);
  }

  addPokemon(pokemonToAdd: Pokemon) {
    this.pokemons = [...this.pokemons, pokemonToAdd];
    return pokemonToAdd;
  }

  deletePokemon(id: string) {
    this.pokemons = this.pokemons.filter((poke) => poke.id !== id);
  }
}
