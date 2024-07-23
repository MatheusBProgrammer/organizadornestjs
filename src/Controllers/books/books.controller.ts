import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { BookDTO } from '../../DTO/books.dto';

@Controller('books')
export class BooksController {
  @Get()
  getAllBooks(): string {
    return 'Livros';
  }

  @Post()
  saveBook(@Body() newBook: BookDTO): BookDTO {
    return newBook;
  }

  @Patch()
  updateBook(): string {
    return 'Livro Patch';
  }

  @Delete()
  deleteBook(): string {
    return 'Livro apagado';
  }
}
