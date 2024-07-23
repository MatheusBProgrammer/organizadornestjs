// Importa decoradores da biblioteca 'class-validator'
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  IsNumber,
  IsArray,
  ArrayNotEmpty,
  IsOptional,
  IsPositive,
  ArrayMinSize,
  IsNotEmptyObject,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { AuthorDTO } from './author.dto';
/**
 * DTO para representar um livro.
 */
export class BookDTO {
  @IsNotEmpty() // Garante que 'name' não esteja vazio
  @IsString() // Garante que 'name' seja uma string
  @MinLength(2) // Garante que 'name' tenha pelo menos 2 caracteres
  @MaxLength(100) // Garante que 'name' tenha no máximo 100 caracteres
  readonly name: string;

  @IsArray() // Garante que 'author' seja um array
  @ArrayNotEmpty() // Garante que 'author' não esteja vazio
  @Type(() => AuthorDTO)
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  readonly author: AuthorDTO[];

  @IsString() // Garante que 'language' seja uma string
  @IsOptional() // Torna 'language' opcional
  readonly language?: string;

  @IsNumber() // Garante que 'releaseYear' seja um número
  @IsPositive()
  readonly releaseYear: number;

  @IsString() // Garante que 'publisher' seja uma string
  @IsOptional() // Torna 'publisher' opcional
  readonly publisher?: string;

  @IsNumber() // Garante que 'pages' seja um número
  readonly pages: number;
}
