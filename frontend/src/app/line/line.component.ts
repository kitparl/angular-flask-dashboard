import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { SharedDataService } from '../service/shared-data.service';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {
  private data: any[];
  private svg;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
    this.sharedDataService.data$.subscribe(data => {
      if (data) {
        this.data = data;
        if (!this.svg) {
          this.createSvg();
        }
        this.drawLineChart();
      }
    });
  }

  private createSvg(): void {
    this.svg = d3.select("figure#line")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  private drawLineChart(): void {
    const x = d3.scaleLinear()
      .domain([d3.min(this.data, d => Number(d.Released)), d3.max(this.data, d => Number(d.Released))])
      .range([0, this.width]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(this.data, d => Number(d.Stars))])
      .range([this.height, 0]);

    const line = d3.line<any>()
      .x(d => x(Number(d.Released)))
      .y(d => y(Number(d.Stars)));

    this.svg.append("path")
      .datum(this.data)
      .attr("class", "line")
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5);

    this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x));

    this.svg.append("g")
      .call(d3.axisLeft(y));
  }
}
