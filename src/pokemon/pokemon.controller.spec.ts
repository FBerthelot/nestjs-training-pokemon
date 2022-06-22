import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../app.module';

describe('PokemonController', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('/pokemon (GET)', () => {
    it('should return the name of all pokemons', () => {
      return request(app.getHttpServer())
        .get('/pokemon')
        .expect(200)
        .expect(['pikachu', 'salameche', 'bulbizarre']);
    });
  });

  describe('/pokemon/:id (GET)', () => {
    it('should return pikachu when asking for id 1', () => {
      return request(app.getHttpServer()).get('/pokemon/1').expect(200).expect({
        id: '1',
        name: 'pikachu',
        speed: 50,
        attack: 20,
        hp: 100,
      });
    });

    it('should return salameche when asking for id 1', () => {
      return request(app.getHttpServer()).get('/pokemon/2').expect(200).expect({
        id: '2',
        name: 'salameche',
        speed: 40,
        attack: 10,
        hp: 100,
      });
    });
  });

  describe('/pokemon/:id (DELETE)', () => {
    it('should delete pikachu', async () => {
      const server = app.getHttpServer();

      await request(server).delete('/pokemon/1').expect(200);
      await request(server).get('/pokemon').expect(['salameche', 'bulbizarre']);
    });
  });

  describe('/pokemon/ (PUT)', () => {
    it('should add new pokemon', async () => {
      const server = app.getHttpServer();

      await request(server)
        .post('/pokemon')
        .send({
          id: '4',
          name: 'Florent Berthelot',
          speed: 50,
          attack: 20,
          hp: 100,
        })
        .expect(201);

      await request(server)
        .get('/pokemon')
        .expect(['salameche', 'bulbizarre', 'Florent Berthelot']);
    });
  });
});
