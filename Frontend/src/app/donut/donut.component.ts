import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { SharedDataService } from '../service/shared-data.service';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.scss']
})
export class DonutComponent implements OnInit {
  private data: any[];
  private svg;
  private margin = 50;
  private width = 750;
  private height = 600;
  private radius = Math.min(this.width, this.height) / 2 - this.margin;
  
  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
    this.sharedDataService.data$.subscribe(data => {
      if (data) {
        this.data = data;
        if (!this.svg) {
          this.createSvg();
        }
        this.drawDonut();
      }
    });
  }

  private createSvg(): void {
    this.svg = d3.select("figure#donut")
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .append("g")
      .attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");
  }

  private drawDonut(): void {
    const color = d3.scaleOrdinal()
      .domain(this.data.map(d => d.Framework))
      .range(["#c7d3ec", "#a5b8db", "#879cc4", "#677795", "#5a6782"]);

    const pie = d3.pie<any>().value((d: any) => Number(d.Stars));

    const arc = d3.arc()
      .innerRadius(this.radius * 0.5) // Hole size
      .outerRadius(this.radius);

    const pieData = pie(this.data);

    this.svg.selectAll("path")
      .data(pieData)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", d => color(d.data.Framework))
      .attr("stroke", "#fff")
      .style("stroke-width", "2px");

    // Add labels
    const label = d3.arc()
      .outerRadius(this.radius - 40)
      .innerRadius(this.radius - 40);

    this.svg.selectAll("labels")
      .data(pieData)
      .enter()
      .append("text")
      .text(d => d.data.Framework)
      .attr("transform", d => "translate(" + label.centroid(d) + ")")
      .style("text-anchor", "middle")
      .style("font-size", "12px");
  }
}
