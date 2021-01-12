import {Book} from './book';

export interface Customer {
  id: number;
  name: string;
  books: Book[];
}
