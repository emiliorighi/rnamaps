<template>
    <svg style="overflow:visible" ref="scatter"></svg>
    <div style="position:absolute" ref="tooltip"/>
</template>
<script setup>
import * as d3 from "d3";
import { onMounted,ref } from "vue";

const props = defineProps({
    data:Object
})
//up to 50 geneids x-axis tpm, y-axis timepoints
const scatter = ref(null)
const tooltip = ref(null)
const margin = {top: 10, right: 100, bottom: 30, left: 30},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

const objectToPlot = ref({})    
const timepoints = ['L3','WP','LP']
const tissues = [
    {letter:'A', name: 'antenna'},
    {letter:'E', name:'eye'},
    {letter:'W', name:'wing'},
    {letter:'L', name: 'leg'}
]


onMounted(()=>{
    scatter.value.focus()
    tooltip.value.focus()
    createPlot()
    // objectToPlot.value=
})

function createPlot(){
    const data = props.data
    const svg = d3.select(scatter.value)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    const myColor = d3.scaleOrdinal()
      .domain(data.tissues.map(t => t.tissueName))
      .range(d3.schemeCategory10);

    
    const x = d3.scaleOrdinal()
        .domain(timepoints)
        .range([10, 210, 410]);

    const y = d3.scaleLinear()
        .domain(d3.extent(data.tissues.map(t => t.values).flat(), d => Number(d.value)))
        .range([height, 0]);

    svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x)
    // .tickFormat((d,i)=>timepoints[i])
    );

    svg.append("g")
      .call(d3.axisLeft(y));

    const line = d3.line()
      .x(d => x(d.time))
      .y(d => y(d.value))

    svg.selectAll("myLines")
      .data(data.tissues)
      .join("path")
        .attr("class", d => d.tissueName)
        .attr("d", d => line(d.values))
        .attr("stroke", d => myColor(d.tissueName))
        .style("stroke-width", 4)
        .style("fill", "none")

    var Tooltip = d3.select(tooltip.value)
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px")

      // Three function that change the tooltip when user hover / move / leave a cell
      const mouseover = function(event,d) {
        Tooltip
          .style("opacity", 1)
      }
      const mousemove = function(event,d) {
        Tooltip
          .html("Average TPMs: " + d.value)
          .style("left", `${event.layerX+10}px`)
          .style("top", `${event.layerY}px`)
      }
      const mouseleave = function(event,d) {
        Tooltip
          .style("opacity", 0)
      }

    svg.selectAll("myDots")
      .data(data.tissues)
      .join('g')
        .style("fill", d => myColor(d.tissueName))
        .attr("class", d => d.tissueName)
      .selectAll("myPoints")
      .data(d => d.values)
      .join("circle")
        .attr("cx", d => x(d.time))
        .attr("cy", d => y(d.value))
        .attr("r", 5)
        .attr("stroke", "white")
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave)

    // svg
    //   .selectAll("myLabels")
    //   .data(data.tissues)
    //   .join('g')
    //     .append("text")
    //       .attr("class", d => d.tissueName)
    //       .datum(d => { return {name: d.tissueName, value: d.values[d.values.length - 1]}; }) // keep only the last value of each time series
    //       .attr("transform", d => `translate(${x(d.value.time)},${y(d.value.value)})`) // Put the text at the position of the last point
    //       .attr("x", 12) // shift the text a bit more right
    //       .text(d => d.name)
    //       .style("fill", d => myColor(d.name))
    //       .style("font-size", 15)

   const g =  svg.selectAll("myLegend")
      .data(data.tissues)
      .enter()
        .append('g')
        .attr("transform", (d, i) => `translate(${460},${i * 20})`);

        g.append("rect")
        .attr("width", 15)
        .attr("height", 15)
        .style("fill", function(d){ return myColor(d.tissueName) });

        g.append("text")
        .attr("x", 24)
        .attr("y", 9)
        .attr("dy", "0.35em")
          // .attr('x', function(d,i){ return 30 + i*60})
          // .attr('y', 30)
          .text(function(d) { return d.tissueName; })
          .style("fill", function(d){ return myColor(d.tissueName) })
          .style("font-size", 15)
        .on("click", function(event,d){
            console.log(d)
          // is the element currently visible ?
         const currentOpacity = d3.selectAll("." + d.tissueName).style("opacity")
          // Change the opacity: from 0 to 1 or from 1 to 0
          d3.selectAll("." + d.tissueName).transition().style("opacity", currentOpacity == 1 ? 0:1)

        })

}


</script>