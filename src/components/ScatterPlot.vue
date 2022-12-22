<template>
    <svg style="overflow:visible" ref="scatter"></svg>
    <div style="position:absolute" ref="tooltip"/>
</template>

<script setup>
import * as d3 from "d3";
import { onMounted,ref } from "vue";
import rnaSeq from "../assets/notrypsin-rna-seq-fly-avg.json"

const scatter = ref(null)
const tooltip = ref(null)
const margin = {top: 10, right: 100, bottom: 30, left: 30},
    width = 500 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

const timepoints = ['L3','WP','LP']

// set the dimensions and margins of the graph
onMounted(()=>{
    scatter.value.focus()
    tooltip.value.focus()
    createPlot()
})

function createPlot(){
    const data = rnaSeq
    const svg = d3.select(scatter.value)
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

    const myColor = d3.scaleOrdinal()
    .domain(data[0].tissues.map(t => t.tissueName))
    .range(d3.schemeCategory10);

    var myCircle = svg.append('g')
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.Sepal_Length); } )
      .attr("cy", function (d) { return y(d.Petal_Length); } )
      .attr("r", 8)
      .style("fill", function (d) { return color(d.Species) } )
      .style("opacity", 0.5)

    const x = d3.scaleLinear()
    .domain([4, 8])
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 9])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

  // Color scale: give me a specie name, I return a color
  var color = d3.scaleOrdinal()
    .domain(["setosa", "versicolor", "virginica" ])
    .range([ "#440154ff", "#21908dff", "#fde725ff"])

  // Add dots
  var myCircle = svg.append('g')
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.Sepal_Length); } )
      .attr("cy", function (d) { return y(d.Petal_Length); } )
      .attr("r", 8)
      .style("fill", function (d) { return color(d.Species) } )
      .style("opacity", 0.5)

  // Add brushing
  svg
    .call( d3.brush()                 // Add the brush feature using the d3.brush function
      .extent( [ [0,0], [width,height] ] ) // initialise the brush area: start at 0,0 and finishes at width,height: it means I select the whole graph area
      .on("start brush", updateChart) // Each time the brush selection changes, trigger the 'updateChart' function
    )

  // Function that is triggered when brushing is performed
  function updateChart() {
    extent = d3.event.selection
    myCircle.classed("selected", function(d){ return isBrushed(extent, x(d.Sepal_Length), y(d.Petal_Length) ) } )
  }

  // A function that return TRUE or FALSE according if a dot is in the selection or not
  function isBrushed(brush_coords, cx, cy) {
       var x0 = brush_coords[0][0],
           x1 = brush_coords[1][0],
           y0 = brush_coords[0][1],
           y1 = brush_coords[1][1];
      return x0 <= cx && cx <= x1 && y0 <= cy && cy <= y1;    // This return TRUE or FALSE depending on if the points is in the selected area
  }
    
}

</script>