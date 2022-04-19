import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  brandName = 'Dream Stay';
  tourName = 'The Forest Hike';
  tourPrice = '999';
  constructor() {}

  ngOnInit(): void {}
}
