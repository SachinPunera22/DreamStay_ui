import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
numbers= [1, 2, 3, 4, 5,];

  constructor() {}

  ngOnInit(): void {}
}
