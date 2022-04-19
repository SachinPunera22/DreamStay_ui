import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Form } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  pass = '';
  rpassword = '';
  constructor(public userService: UserService, private router: Router) {}

  onSubmit(form: NgForm) {
    const data = {
      fullName: form.value.fullName,
      email: form.value.email,
      password: form.value.password,
    };
    console.log(data.fullName);
    console.log(data.email);
    console.log(data.password);

    this.userService.create(data).subscribe(() => {
      this.router.navigate(['']);
    });
  }

  ngOnInit(): void {}
}
