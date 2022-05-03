import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PackageService } from '../shared/services/package.service';
import { Package } from '../shared/models/package.model';


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
 
  constructor(public PackageService: PackageService, private router: Router,private route: ActivatedRoute) {
   
    if(localStorage.getItem("user"))
    { this.loggedIn=true}
    else{
      this.loggedIn=false
    }
  }
  
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

  bookTour(){
    console.log(this.id)
    this.router.navigate(['payment/'+ this.id]);
  }
} 

