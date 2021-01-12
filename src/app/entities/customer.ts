import {Book} from './book';

export interface Customer {
  id: number;
  firstname: string;
  lastname: string;
  books: Book[];
}
