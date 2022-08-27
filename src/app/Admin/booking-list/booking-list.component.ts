import { Booking } from './../../shared/models/booking.model';
import { Component, OnInit } from '@angular/core';

import { BookingService } from 'src/app/shared/services/booking.service';
@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  public dtOptions: DataTables.Settings = {};

  public bookings: Booking[] = [];
 
  
  constructor(

    public BookingService: BookingService,
    // private _toasterService: ToasterService,

  ) {}
  
  ngOnInit(): void {
    this.getbooking();
   
  }
  
  
  
  getbooking() {
   this.BookingService.list().subscribe((booking) => {
      console.log('Booking');
      this.bookings = booking;

        // (err) => this._toasterService.showError("No booking found")
      });
  }
  
  
 
  }