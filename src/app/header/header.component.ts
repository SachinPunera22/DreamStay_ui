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
  loggedIn:boolean;

  public User: User = {} as User;
  constructor(
    public UserService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.User=JSON.parse(localStorage.getItem("user"))
    if(!this.User)
     this.loggedIn=false
    else{
      this.loggedIn=true
    }
    
  }

  onLogout() {
   
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.loggedIn=false
  }
  ngOnInit(): void {}
}
