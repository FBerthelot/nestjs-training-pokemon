import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Pokemon } from './pokemon.model';

interface PokemonFromPokeApi {
  base_experience: number;
}

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
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    },
  ];

  constructor(private http: HttpService) {}

  async getPokemon(id: string): Promise<Omit<Pokemon, 'url'>> {
    const pokemon = this.pokemons.find((poke) => poke.id === id);

    const hydratedPokemon: Pokemon = { ...pokemon };

    if (pokemon.url) {
      try {
        const pokeFromApi = await this.http
          .get<PokemonFromPokeApi>(pokemon.url)
          .toPromise();
        hydratedPokemon.hp = pokeFromApi.data.base_experience;
      } catch (err) {
        console.error(err);
      }
    }

    delete hydratedPokemon.url;
    return hydratedPokemon;
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
