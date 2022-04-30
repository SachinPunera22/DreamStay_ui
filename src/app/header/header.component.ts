import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  brandName = 'Dream Stay';
  loggedIn = false;
  id: any;

  public User: User = {} as User;
  constructor(
    public UserService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    console.log("constructor called")
    this.id = '62658742cedb1e3c227eb64d';
    this.UserService.getUser(this.id).subscribe({
      next: (data: User) => {
        this.User = data;
        this.loggedIn = true;
      },
      error: (err) => {
        console.log(err);
      },
    });
    // this.id = this.route.snapshot.params['id'];
  }

  onLogout() {
    localStorage.removeItem('token');
  }
  ngOnInit(): void {
    
  }
}
