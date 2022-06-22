import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class AuthBodyDTO {
  @ApiProperty({
    minLength: 1,
  })
  @IsString()
  @MinLength(1)
  name: string;

  @ApiProperty({
    minLength: 1,
  })
  @IsString()
  @MinLength(1)
  password: string;
}
