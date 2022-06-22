import { Body, Controller, Post } from '@nestjs/common';
import { AuthBodyDTO } from './auth.dto';

const users = [
  {
    name: 'florent',
    password: 'training',
  },
];

@Controller('auth')
export class AuthController {
  @Post()
  authenticate(@Body() { name, password }: AuthBodyDTO) {
    return !!users.find(
      (user) => user.name === name && user.password === password,
    );
  }
}
