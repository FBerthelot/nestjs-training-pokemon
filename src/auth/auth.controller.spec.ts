import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../app.module';

describe('AuthController', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('/auth (POST)', () => {
    it('shoud authenticate successfuly when name and password exist', () => {
      return request(app.getHttpServer())
        .post('/auth')
        .send({ name: 'florent', password: 'training' })
        .expect(201);
    });
    it("should fail authentication when name doesn't exist", () => {
      return request(app.getHttpServer())
        .post('/auth')
        .send({ name: 'notExist', password: 'training' })
        .expect(401);
    });
    it('should fail authentication when name exist but password is wrong', () => {
      return request(app.getHttpServer())
        .post('/auth')
        .send({ name: 'florent', password: 'badPassword' })
        .expect(401);
    });
  });
});
