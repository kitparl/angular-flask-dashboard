import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { SharedDataService } from '../service/shared-data.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
  private data: any[];
  private svg;
  private margin = { top: 10, right: 30, bottom: 30, left: 60 };
  private width = 600 - this.margin.left - this.margin.right;
  private height = 400 - this.margin.top - this.margin.bottom;

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
    this.sharedDataService.data$.subscribe(data => {
      if (data) {
        this.data = data;
        if (!this.svg) {
          this.createSvg();
        }
        this.drawAreaChart();
      }
    });
  }

  private createSvg(): void {
    this.svg = d3.select("figure#line")
      .append("svg")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom)
      .append("g")
      .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
  }

private drawAreaChart(): void {
  const x = d3.scaleLinear()
    .domain([d3.min(this.data, d => Number(d.Released)), d3.max(this.data, d => Number(d.Released))])
    .range([0, this.width]);

  const y = d3.scaleLinear()
    .domain([0, d3.max(this.data, d => Number(d.Stars))])
    .range([this.height, 0]);

  const area = d3.area<any>()
    .x(d => x(Number(d.Released)))
    .y0(this.height)
    .y1(d => y(Number(d.Stars)));

  this.svg.append("path")
    .datum(this.data)
    .attr("class", "area")
    .attr("d", area)
    .attr("fill", "steelblue")
    .attr("fill-opacity", 0.5);

  this.svg.append("g")
    .attr("transform", "translate(0," + this.height + ")")
    .call(d3.axisBottom(x));

  this.svg.append("g")
    .call(d3.axisLeft(y));
}

}
