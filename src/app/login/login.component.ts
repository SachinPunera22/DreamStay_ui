import { Component, OnInit } from '@angular/core';
import{ AuthService } from "../shared/services/auth.service"
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  passed=true;

  constructor(public authService: AuthService, private router: Router) {}

  onSubmit(form: NgForm) {
    const data = {
      email: form.value.email,
      password: form.value.password,
    };

    this.authService.login(data).subscribe(
      (res) => {
        this.router.navigate(['']);
        console.log(res.token)
        localStorage.setItem("token",res.token)
      },
      (err) => {
        this.passed=false
        setTimeout(() => {
          this.passed = true;
        }, 3000);
        console.error(err);
      }
    );
  }

  ngOnInit(): void {}
}
