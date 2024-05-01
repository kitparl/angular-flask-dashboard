import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { SharedDataService } from '../service/shared-data.service';

// Adopted from Basic pie chart example on D3 Graph Gallery:
// https://www.d3-graph-gallery.com/graph/pie_basic.html
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
  // data: any;

  private data = [
    {"Framework": "Vue", "Stars": "166443", "Released": "2014"},
    {"Framework": "React", "Stars": "150793", "Released": "2013"},
    {"Framework": "Angular", "Stars": "62342", "Released": "2016"},
    {"Framework": "Backbone", "Stars": "27647", "Released": "2010"},
    {"Framework": "Ember", "Stars": "21471", "Released": "2011"},
  ];
  private svg;
  private margin = 50;
  private width = 750;
  private height = 600;
  private radius = Math.min(this.width, this.height) / 2 - this.margin;
  private colors;


  constructor(private sharedDataService: SharedDataService) { }


  ngOnInit(): void {
    this.sharedDataService.data$.subscribe(data => {
      if (data) {
        this.data = data;
        if (!this.svg) {
          this.createSvg();
          this.createColors();
        }
        this.drawChart();
      }
    });
  }

  private createSvg(): void {
    this.svg = d3.select("figure#pie")
    .append("svg")
    .attr("width", this.width)
    .attr("height", this.height)
    .append("g")
    .attr(
      "transform",
      "translate(" + this.width / 2 + "," + this.height / 2 + ")"
    );
  }

  private createColors(): void {
    this.colors = d3.scaleOrdinal()
    .domain(this.data.map(d => d.Stars.toString()))
    .range(["#c7d3ec", "#a5b8db", "#879cc4", "#677795", "#5a6782"]);
  }

  private drawChart(): void {
    const pie = d3.pie<any>().value((d: any) => Number(d.Stars));
    
    // Add tooltip
    const tooltip = d3.select("figure#pie")
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("position", "absolute")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "1px")
        .style("border-radius", "5px")
        .style("padding", "10px");

    const arc = d3.arc()
        .innerRadius(0)
        .outerRadius(this.radius);

    // Build the pie chart
    this.svg.selectAll('pieces')
        .data(pie(this.data))
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', (d, i) => (this.colors(i)))
        .attr("stroke", "#121926")
        .style("stroke-width", "1px")
        .on("mouseover", function (event, d) {
            d3.select(this)
                .transition()
                .duration(200)
                .attr("fill", d3.color(d3.select(this).attr("fill")).brighter(0.5).toString());
            tooltip.transition()
                .duration(200)
                .style("opacity", 1);
            tooltip.html(d.data.Framework)
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 15) + "px");
        })
        .on("mouseout", function () {
            d3.select(this)
                .transition()
                .duration(200)
                .attr("fill", d3.color(d3.select(this).attr("fill")).darker(0.5).toString());
            tooltip.transition()
                .duration(200)
                .style("opacity", 0);
        });

    // Add labels
    const labelLocation = d3.arc()
        .innerRadius(100)
        .outerRadius(this.radius);

    this.svg.selectAll('pieces')
        .data(pie(this.data))
        .enter()
        .append('text')
        .text(d => d.data.Framework)
        .attr("transform", d => "translate(" + labelLocation.centroid(d) + ")")
        .style("text-anchor", "middle")
        .style("font-size", 15);
}


}
