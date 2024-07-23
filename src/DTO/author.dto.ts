import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class AuthorDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(100)
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly surname: string;
}
