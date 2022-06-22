import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
@Injectable()
export class AuthService {
  users = [
    {
      name: 'florent',
      password: 'training',
    },
  ];

  authenticate(name: string, password: string): string {
    const userFound = this.users.find(
      (user) => user.name === name && user.password === password,
    );

    if (!userFound) {
      throw new UnauthorizedException();
    }

    return jwt.sign(
      {
        username: userFound.name,
      },
      'secret-tres-important',
      { expiresIn: '1h' },
    );
  }
}
