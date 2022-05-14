import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PackageService } from '../shared/services/package.service';
import { Package } from '../shared/models/package.model';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import{MatDialogRef}from '@angular/material/dialog';

@Component({
  selector: 'app-package-detail',
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.css'],
})
export class PackageDetailComponent implements OnInit {
  tittle="d"
  id:number;
  
  loggedIn:boolean;


  public package: Package={} as Package;
 
  constructor(public PackageService: PackageService, private router: Router,private route: ActivatedRoute,
    public dialog: MatDialog) {
   
    this.checkUser()
  }
  checkUser(){
   
    if(!localStorage.getItem("user"))
     {this.loggedIn=false
     return false}
    else{
      this.loggedIn=true
      return true
    }}
  ngOnInit(): void {
   this.id = this.route.snapshot.params['id'];
    this.PackageService.getPackage(this.id).subscribe({
       next:(data:Package) => { 
         this.package = data;
         console.log("package:"+ this.package)

         },
         error:(err)=>{ 
            console.log(err)
          }
          })
  }
  openLoginDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass= "dialog-responsive";
    dialogConfig.backdropClass= "backdropClass";
    
    const dialogRef = this.dialog.open(LoginComponent,dialogConfig)
  
  dialogRef.afterClosed().subscribe(res=>{
    if(this.checkUser())
    this.router.navigate(['payment/'+ this.id]);
  })
  }
  bookTour(){
   
    if(this.checkUser())
    this.router.navigate(['payment/'+ this.id]);
    else
    this.openLoginDialog()
  }
} 

