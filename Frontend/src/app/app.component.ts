import { Component, OnInit } from '@angular/core';
import { DataService } from './service/api.service'; // Update the path to match your actual service file
import { SparklineChartDataItem } from './sparkline-chart/sparkline-chart.model';
import { SharedDataService } from './service/shared-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Dashboard';
  currentYear = new Date().getFullYear();
  lastFiveYears: number[] = [];
  barGraphData: any[] = [];


  constructor(private dataService: DataService, private sharedDataService: SharedDataService) {} // Add 'private' access modifier to dataService

  ngOnInit(): void {
    this.getDataByYear(this.currentYear);
    this.lastFiveYearList();
  }

  getDataByYear(year: any): void {
    this.dataService.getDataByEndYear(year).subscribe(
      (data) => {
    this.sharedDataService.calculateIntesity(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getDataByCity(keyword: string): void {
    this.dataService.getDataByCity(keyword).subscribe(
      (data) => {
    this.sharedDataService.calculateIntesity(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getDataByCountry(keyword: string): void {
    this.dataService.getDataByCountry(keyword).subscribe(
      (data) => {
    this.sharedDataService.calculateIntesity(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getDataBySwot(keyword: string): void {
    this.dataService.getDataBySwot(keyword).subscribe(
      (data) => {
    this.sharedDataService.calculateIntesity(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getDataByRegion(keyword: string): void {
    this.dataService.getDataByRegion(keyword).subscribe(
      (data) => {
    this.sharedDataService.calculateIntesity(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getDataByPestle(keyword: string): void {
    this.dataService.getDataByPestle(keyword).subscribe(
      (data) => {
    this.sharedDataService.calculateIntesity(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }



  getDataByTopic(keyword: string): void {
    this.dataService.getDataByTopic(keyword).subscribe(
      (data) => {
    this.sharedDataService.calculateIntesity(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

    currentDataPoint: SparklineChartDataItem = null;

  public data: SparklineChartDataItem[] = [
    {
      id: 1,
      x: '1 Minute Ago',
      y: 25
    },
    {
      id: 2,
      x: '5 Minute Ago',
      y: 20
    },
    {
      id: 3,
      x: '10 Minute Ago',
      y: 35
    },
    {
      id: 4,
      x: '15 Minute Ago',
      y: 17
    },
    {
      id: 5,
      x: '20 Minute Ago',
      y: 17
    },
    {
      id: 6,
      x: '25 Minute Ago',
      y: 22
    },
  ];

  onDataPointHovered(data: SparklineChartDataItem) {
    this.currentDataPoint = data;
  }

  handleClick(event: MouseEvent, type:string, value: string) {
    event.preventDefault();
    console.log(value);
    
    switch (type) {
      case "YEAR":
        this.getDataByYear(value);
        break;
      case "COUNTRY":
        this.getDataByCountry(value)
        break;
      case "REGION":
        this.getDataByRegion(value);
        break;
      case "SWOT":
        this.getDataBySwot(value);
        break;
      case "PEST":
        this.getDataByPestle(value);
        break;
      case "CITY":
        this.getDataByCity(value);
        break;
      default:
        this.getDataByYear(this.currentYear);
}



    // You can now use the value as needed
  }

  lastFiveYearList(){
for (let i = 0; i < 5; i++) {
    this.lastFiveYears.push((this.currentYear) - i);
}
  }
}