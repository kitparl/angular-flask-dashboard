import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { SharedDataService } from '../service/shared-data.service';

@Component({
  selector: 'app-sparkline',
  templateUrl: './sparkline.component.html',
  styleUrls: ['./sparkline.component.scss']
})
export class SparklineComponent implements OnInit {
  private data: any[];
  private svg;
  private margin = { top: 10, right: 10, bottom: 20, left: 20 };
  private width = 150 - this.margin.left - this.margin.right;
  private height = 50 - this.margin.top - this.margin.bottom;

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
    this.sharedDataService.data$.subscribe(data => {
      if (data) {
        this.data = data;
        if (!this.svg) {
          this.createSvg();
        }
        this.drawSparkline();
      }
    });
  }

  private createSvg(): void {
    this.svg = d3.select("figure#sparkline")
      .append("svg")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom)
      .append("g")
      .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
  }

  private drawSparkline(): void {
    const x = d3.scaleLinear()
      .domain([0, this.data.length - 1])
      .range([0, this.width]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(this.data, d => Number(d.Stars))])
      .range([this.height, 0]);

    const line = d3.line<any>()
      .x((d, i) => x(i))
      .y(d => y(Number(d.Stars)));

    this.svg.append("path")
      .datum(this.data)
      .attr("class", "sparkline")
      .attr("d", line)
      .style("fill", "none")
      .style("stroke", "#d04a35")
      .style("stroke-width", "1px");
  }
}
