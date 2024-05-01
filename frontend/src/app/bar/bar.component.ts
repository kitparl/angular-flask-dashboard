import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { SharedDataService } from '../service/shared-data.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {
  data: any;
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
        this.drawBars(this.data);
      }
    });
  }

  private createSvg(): void {
    this.svg = d3.select("figure#bar")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  private drawBars(data: any[]): void {
    // Add X axis
    const x = d3.scaleBand()
      .range([0, this.width])
      .domain(data.map(d => d.Framework))
      .padding(0.2);

    this.svg.selectAll(".x-axis")
      .data([data])
      .join("g")
      .attr("class", "x-axis")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    // Add Y axis
    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.Stars)])
      .nice()
      .range([this.height, 0]);

    this.svg.selectAll(".y-axis")
      .data([data])
      .join("g")
      .attr("class", "y-axis")
      .call(d3.axisLeft(y));

    // Create and update the bars
    const bars = this.svg.selectAll(".bar")
      .data(data, d => d.Framework);

    bars.enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", d => x(d.Framework))
      .attr("y", this.height)
      .attr("height", 0)
      .merge(bars)
      .transition()
      .duration(1000)
      .attr("x", d => x(d.Framework))
      .attr("y", d => y(d.Stars))
      .attr("width", x.bandwidth())
      .attr("height", d => this.height - y(d.Stars))
      .attr("fill", "#d04a35");

    bars.exit().remove();
  }
}

