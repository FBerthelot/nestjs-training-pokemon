import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonController } from './pokemon/pokemon.controller';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { PokemonService } from './pokemon/pokemon.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [AppController, PokemonController, AuthController],
  providers: [AppService, AuthService, PokemonService],
})
export class AppModule {}
