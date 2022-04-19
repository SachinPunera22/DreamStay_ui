import { Component, OnInit } from '@angular/core';
import { PackageService } from '../shared/services/package.service';
import { Package } from '../shared/models/package.model';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css'],
})
export class PackageComponent implements OnInit {
  packages: Package[] = [];

  constructor(public PackageService: PackageService) {}

  ngOnInit(): void {
    this.PackageService.all().subscribe((packages) => {
      this.packages = packages;
    });
  }
}
