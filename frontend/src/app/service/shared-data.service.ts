// shared-data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private dataSubject = new BehaviorSubject<any>(null);
  public data$ = this.dataSubject.asObservable();
  barGraphData: any[] = [];

  constructor() {}

  calculateIntesity(data){        

    this.barGraphData = [];

    // Note{array of arrar}: innterArray[Sector] = innerArray[5] and innerArray[4] = innerArray[intesity]
    let filteredPharmaceuticalsArray: any = data.filter(innerArray => innerArray[5] === "Pharmaceuticals");
    let sumPharmaceuticals: number = filteredPharmaceuticalsArray.reduce((acc, innerArray) => acc + innerArray[4], 0);
    let avgPharmaceuticals: number = sumPharmaceuticals / filteredPharmaceuticalsArray.length;
    let objPharmaceuticals = new BarGraphIntensity("Pharmaceuticals",Math.ceil(avgPharmaceuticals) || 0)
    this.barGraphData.push(objPharmaceuticals)

    let filteredHealthcareArray: any = data.filter(innerArray => innerArray[5] === "Healthcare");
    let sumHealthcare: number = filteredHealthcareArray.reduce((acc, innerArray) => acc + innerArray[4], 0);
    let avgHealthcare: number = sumHealthcare / filteredHealthcareArray.length;
    let objHealthcare = new BarGraphIntensity("Healthcare",Math.ceil(avgHealthcare) || 0)
    this.barGraphData.push(objHealthcare)
    
    let filteredEnergyArray: any = data.filter(innerArray => innerArray[5] === "Energy");
    let sumEnergy: number = filteredEnergyArray.reduce((acc, innerArray) => acc + innerArray[4], 0);
    let avgEnergy: number = sumEnergy / filteredEnergyArray.length;
    let objEnergy = new BarGraphIntensity("Energy",Math.ceil(avgEnergy) || 0)
    this.barGraphData.push(objEnergy)

    let filteredManufacturingArray: any = data.filter(innerArray => innerArray[5] === "Manufacturing");
    let sumManufacturing: number = filteredManufacturingArray.reduce((acc, innerArray) => acc + innerArray[4], 0);
    let avgManufacturing: number = sumManufacturing / filteredManufacturingArray.length;
    let objManufacturing = new BarGraphIntensity("Manufacturing",Math.ceil(avgManufacturing) || 0)
    this.barGraphData.push(objManufacturing)

    let filteredFoodArray: any = data.filter(innerArray => innerArray[5] === "Food & agriculture");    
    let sumFood: number = filteredFoodArray.reduce((acc, innerArray) => acc + innerArray[4], 0);
    let avgFood: number = sumFood / filteredFoodArray.length;
    let objFood = new BarGraphIntensity("Food & agriculture",Math.ceil(avgFood) || 0)
    this.barGraphData.push(objFood)

    console.log(this.barGraphData);
    this.dataSubject.next(this.barGraphData); 
  }
}

class BarGraphIntensity {
    Framework: string;
    Stars: number;
  
    constructor(Framework: string, Stars: number) {
      this.Framework = Framework;
      this.Stars = Stars;
    }
}
