import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../shared/services/booking.service';
import { Package } from '../shared/models/package.model';
import { User } from '../shared/models/user.model';
import { Booking } from '../shared/models/booking.model';
import { bookingList } from '../shared/models/booking.model';

@Component({
  selector: 'app-booking-status',
  templateUrl: './booking-status.component.html',
  styleUrls: ['./booking-status.component.css'],
})
export class BookingStatusComponent implements OnInit {
  public package: Package;
  public bookingList: bookingList[];
  public user: User;
  brandName = 'Dream Stay';
  tourName = 'The Forest Hike';
  tourPrice = '999';

  id: number;

  public bookingAvailable: boolean = false;

  constructor(
    public BookingService: BookingService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];
    this.BookingService.getBooking(this.id).subscribe({
      next: (data) => {
        this.bookingList = data.booking;
        console.log('bookingList:' + JSON.stringify(this.bookingList[0]));
        this.bookingAvailable=true
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {}
}
