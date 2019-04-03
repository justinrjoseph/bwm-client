import { Review } from '.';

export interface ReviewCreatedEvent {
  bookingId: string;
  review: Review;
}
