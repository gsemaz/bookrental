export interface Review {
  id: number;
  userId: number;
  bookId: number;
  text: string;
  date: string; // ISO Date String
  delayed: boolean;
}