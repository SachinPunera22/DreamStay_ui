import { Component, OnInit, ViewChild } from '@angular/core';
import { PackageService } from '../shared/services/package.service';
import { Package } from '../shared/models/package.model';
import { ActivatedRoute, Router } from '@angular/router';
import {
  NgbCarousel,
  NgbCarouselConfig,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css'],
})
export class PackageComponent implements OnInit {
  @ViewChild('ngcarousel', { static: true }) ngCarousel!: NgbCarousel;

  packages: Package[] = [];

  showNavigationArrows: boolean;
  pauseOnHover: boolean;
  interval: number;
  source: NgbSlideEventSource;

  images: { img: string }[] = [
    { img: '../../assets/Images/Hill_station.jpg' },
    { img: '../../assets/Images/Beaches.jpg' },
    { img: '../../assets/Images/Historical_places.jpg' },
    
  ];

  constructor(
    public PackageService: PackageService,
    private router: Router,
    config: NgbCarouselConfig
  ) {
    // customize default values of carousels used by this component tree

    config.showNavigationArrows = true;
    config.pauseOnHover = true;
    config.interval = 3000;
  }

  onSubmit(id: any) {
    this.router.navigate(['/package-detail/' + id]);
  }
  ngOnInit(): void {
    this.PackageService.all().subscribe((packages) => {
      console.log('package');
      this.packages = packages;
    });
  }
}
