import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PackageService } from '../shared/services/package.service';
import { Package } from '../shared/models/package.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  brandName = 'Dream Stay';
  tourName = 'The Forest Hike';
  tourPrice = '999';

  id:number;
  
  loggedIn:boolean;


  public package: Package={} as Package;
  constructor(public PackageService: PackageService, private router: Router,private route: ActivatedRoute) {
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

  ngOnInit(): void {}
}
