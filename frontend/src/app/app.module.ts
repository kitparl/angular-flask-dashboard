import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';
import { ScatterComponent } from './scatter/scatter.component';
import { HttpClientModule } from '@angular/common/http';
import { SparklineChartComponent } from './sparkline-chart/sparkline-chart.component';
import { SparklineComponent } from './sparkline/sparkline.component';
import { DonutComponent } from './donut/donut.component';
import { LineComponent } from './line/line.component';
import { AreaComponent } from './area/area.component';


@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    PieComponent,
    ScatterComponent,
    SparklineChartComponent,
    SparklineComponent,
    DonutComponent,
    LineComponent,
    AreaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
