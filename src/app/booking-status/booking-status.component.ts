
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../shared/services/booking.service';
import { Package } from '../shared/models/package.model';
import { User } from '../shared/models/user.model';
import { Booking } from '../shared/models/booking.model';

@Component({
  selector: 'app-booking-status',
  templateUrl: './booking-status.component.html',
  styleUrls: ['./booking-status.component.css'],
})
export class BookingStatusComponent implements OnInit {
  public package: Package;
  public booking: Booking;
  public user: User;
  brandName = 'Dream Stay';
  tourName = 'The Forest Hike';
  tourPrice = '999';

  id: number;

  loggedIn: boolean;

  constructor(
    public BookingService: BookingService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];
    this.BookingService.getBooking(this.id).subscribe({
      next: (data) => {
        console.log('data:' + JSON.stringify(data));
        this.package = data.data.package;
        this.booking = data.data.booking;
        this.user = data.data.user;
        console.log('package:' + JSON.stringify(this.package));
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {}
}
