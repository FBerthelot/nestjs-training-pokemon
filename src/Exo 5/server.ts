import { createServer, IncomingMessage, ServerResponse } from 'node:http';
import * as https from 'node:https';

interface PokeApiResponse {
  results: {
    name: string;
  }[];
}

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  if (req.method !== 'GET' || req.url !== '/pokemons') {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        data: 'NOT_FOUND',
      }),
    );
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });

  https
    .get('https://pokeapi.co/api/v2/pokemon/', (pokeResponse) => {
      let data = '';

      // A chaque paquets reçu
      pokeResponse.on('data', (chunk) => {
        data += chunk;
      });

      // Une fois que toute la réponse est arrivé, on peut logguer
      pokeResponse.on('end', () => {
        const pokemonContainer = JSON.parse(data) as PokeApiResponse;
        const pokemons = pokemonContainer.results.map((poke) => poke.name);

        res.end(JSON.stringify(pokemons));
      });
    })
    .on('error', (err) => {
      console.log('Error: ' + err.message);
    });
});

server.listen(8000);
