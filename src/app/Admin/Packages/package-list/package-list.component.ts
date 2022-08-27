import { Component, OnInit,OnDestroy } from '@angular/core';

import { Subscription } from "rxjs";
import { finalize } from "rxjs/operators";
import { PackageService } from '../../../shared/services/package.service';
import { Package } from '../../../shared/models/package.model';
// import { ToasterService } from "src/app/services/toaster.service";
// import { ToggleMenuSharedService } from "src/app/services/toggle-menu-shared.service";

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit ,OnDestroy{

  public dtOptions: DataTables.Settings = {};

  public packages: Package[] = [];
  public packagesSubscription: Subscription;
  
  constructor(

    public PackageService: PackageService,
    // private _toasterService: ToasterService,

  ) {}
  
  ngOnInit(): void {
    this.getpackages();
   
  }
  
  
  
  getpackages() {
    this.packagesSubscription = this.PackageService.all().subscribe((packages) => {
      console.log('package');
      this.packages = packages;

        // (err) => this._toasterService.showError("No packages found")
      });
  }
  
  
  ngOnDestroy() {
    if (this.packagesSubscription) this.packagesSubscription.unsubscribe();
  }
  }
  
  
  
  
