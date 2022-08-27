import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  public dtOptions: DataTables.Settings = {};

  public users: User[] = [];
 
  
  constructor(

    public UserService: UserService,
    // private _toasterService: ToasterService,

  ) {}
  
  ngOnInit(): void {
    this.getusers();
   
  }
  
  
  
  getusers() {
   this.UserService.list().subscribe((users) => {
      console.log('User');
      this.users = users;

        // (err) => this._toasterService.showError("No users found")
      });
  }
  
  
 
  }