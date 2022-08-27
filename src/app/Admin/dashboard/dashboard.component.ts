import { DashboardService } from './../../shared/services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public totalRevenue: number = 0 
  public totalUser: number = 0 
 public totalPackages: number = 0 
 public totalbookings: number = 0 
 //

  view: [number,number] = [700, 400];

  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Revenue';
  yAxisLabel: string = 'Months';
  timeline: boolean = true;

  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#f00', '#0f0', '#0ff'],
  };
 //
 public  multi: any[] = [
  {
    "name": "Germany",
    "series": [
      {
        "name": "Jan",
        "value": 62000000
      },
      {
        "name": "feb",
        "value": 73000000
      },
      {
        "name": "mar",
        "value": 89400000
      }
    ]
  },
  

  

];
public  data: any[] = [
  {
    "name": "Germany",
    "series": [
      {
        "name": "Jan",
        "value": 62000000
      },
      {
        "name": "feb",
        "value": 73000000
      },
      {
        "name": "mar",
        "value": 89400000
      }
    ]
  },
]
 //
  constructor(public dashboardService:DashboardService) { 
    Object.assign(this, { multi:this.multi});
    Object.assign(this, { data:this.data});
  }
  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngOnInit(): void {
    // this.dashboardService.getDetails().subscribe((details)=>{
    //   this.totalRevenue = details.totalRevenue;
    //   this.totalUser = details.totalUser;
    //   this.totalPackages = details.totalPackages;
    //   this.totalbookings = details.totalbookings;
    // })
  }

}
