export interface Review {
  id: number;
  bookID: number;
  userID: number;
  text: string;
  reviewTitle: string;
  date: string; // ISO Date String
  stars: number;
}