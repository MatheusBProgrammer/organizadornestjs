import { Schema } from 'mongoose';
import { AuthorSchema } from './author.schema';
import { Book } from '../Interfaces/book.interface';

export const BookSchema = new Schema<Book>({
  name: { type: String, required: true },
  author: [{ type: Schema.Types.ObjectId, ref: 'Author' }],
  releaseYear: { type: Number, required: true },
  publisher: { type: String, required: true },
  pages: { type: Number, required: true },
});
