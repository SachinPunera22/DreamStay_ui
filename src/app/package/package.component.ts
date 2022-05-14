import { Component, OnInit } from '@angular/core';
import { PackageService } from '../shared/services/package.service';
import { Package } from '../shared/models/package.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css'],
})
export class PackageComponent implements OnInit {
  packages: Package[] = [];

  constructor(public PackageService: PackageService, private router: Router) {}

  onSubmit(id:any){
    
    this.router.navigate(['/package-detail/'+ id]);
  }
  ngOnInit(): void {
    this.PackageService.all().subscribe((packages) => {
      console.log("package")
      this.packages = packages;
    });
  }
}
