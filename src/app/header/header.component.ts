import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/user.model';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  brandName = 'Dream Stay';
  loggedIn:boolean;
  public id:string;
  public User: User = {} as User;
  constructor(
    public UserService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
   
    this.checkUser()
  }
  checkUser(){
    this.User=JSON.parse(localStorage.getItem("user"))
    if(!this.User)
 { console.log('not logged in');
    this.loggedIn=false}
    else{
     { console.log('logged in');
      this.loggedIn=true}
    }
   }
  openLoginDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass= "dialog-responsive";
    dialogConfig.backdropClass= "backdropClass";
    
    const dialogRef = this.dialog.open(LoginComponent,dialogConfig)
  
  dialogRef.afterClosed().subscribe(res=>{
    this.checkUser()
  })
  }

  onLogout() {
   
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.loggedIn=false
    this.router.navigate(['']);
  }

  onBooking(){
    this.User=JSON.parse(localStorage.getItem("user"))
   

 this.router.navigate(['/booking-status/' + this.User._id ]);
  }
  ngOnInit(): void {}
}
