import { Module } from '@nestjs/common';
import { BooksController } from './Controllers/books/books.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksService } from './Services/books/books.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://projetoxico63430:RHLdV4UOMhnXokvC@nuvem.kqruf5p.mongodb.net/?retryWrites=true&w=majority&appName=nuvem',
    ),
  ],
  //controller direciona o usuario para onde ele "quer" e oque ele "pode fazer"
  controllers: [BooksController],
  providers: [BooksService],
})
export class AppModule {}
