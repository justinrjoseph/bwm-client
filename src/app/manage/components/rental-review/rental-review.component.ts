import { Component, Input, ElementRef, Output, EventEmitter } from '@angular/core';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { Review, ReviewCreatedEvent } from '../../../shared';

import { ReviewService } from '../../../rentals/services';

import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'rental-review',
  templateUrl: './rental-review.component.html',
  styleUrls: ['./rental-review.component.scss']
})
export class RentalReviewComponent {
  @Input('bookingId') bookingId: string;
  @Output('reviewCreated')
  reviewCreated = new EventEmitter<ReviewCreatedEvent>();

  modal: NgbModalRef;
  review = new Review();
  error: string;

  constructor(private _modal: NgbModal, private _review: ReviewService) {}

  get reviewNotReady(): boolean {
    return !this.review.rating || !this.review.text;
  }

  launchReviewModal(content: ElementRef): void {
    this.modal = this._modal.open(content);
  }

  changeRating(change: { rating: number }): void {
    this.review.rating = change.rating;
  }

  createReview(): void {
    this._review.create(this.bookingId, this.review)
      .subscribe(
        (review: Review) => {
          this.reviewCreated.emit({ bookingId: this.bookingId, review });

          this.modal.close();
        },
        ({ error }: HttpErrorResponse) => this.error = error
      );
  }
}
