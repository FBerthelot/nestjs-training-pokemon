import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  users = [
    {
      name: 'florent',
      password: 'training',
    },
  ];

  authenticate(name: string, password: string) {
    return !!this.users.find(
      (user) => user.name === name && user.password === password,
    );
  }
}
