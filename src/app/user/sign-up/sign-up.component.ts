import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/user.model';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  pass = '';
  rpassword = '';
  uniqueEmail = true;
  

  constructor(public userService: UserService, private router: Router) {}

  onSubmit(form: NgForm) {
    const data = {
      fullName: form.value.fullName,
      email: form.value.email,
      password: form.value.password,
    };

    this.userService.createUser(data).subscribe(
      (res) => {
        this.router.navigate(['login']);
        localStorage.setItem("token",res.token)
      },
      (err) => {
        this.uniqueEmail=false
        setTimeout(() => {
          this.uniqueEmail = true;
        }, 3000);
        console.error(err);
      }
    );
  }

  ngOnInit(): void {}
}
