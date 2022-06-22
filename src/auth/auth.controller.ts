import { Body, Controller, Post } from '@nestjs/common';
import { AuthBodyDTO } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  authenticate(@Body() { name, password }: AuthBodyDTO) {
    return this.authService.authenticate(name, password);
  }
}
