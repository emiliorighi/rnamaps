<template>
    <div>
        <svg style="overflow: visible;" ref="matrix"></svg>
    </div>
</template>
<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch, watchEffect } from "vue"
import * as d3 from "d3";


const matrix = ref()
const legendWidth = 500;

const props = defineProps<{
    selectedGenes: Record<string, any>[]
    selectedSamples: Record<string, any>[]
}>()


watchEffect(async () => {
    console.log(props.selectedGenes)
    createPlot(props.selectedGenes, props.selectedSamples)
})


async function createPlot(genes, samples) {

    // Set dimensions for heatmap and legend
    const width = 800;
    const height = 300;

    d3.select(matrix.value).selectAll("*").remove();

    // append the svg object to the body of the page
    var svg = d3.select(matrix.value)
        .attr("width", width)
        .attr("height", height)
    // .attr("transform",
    //     "translate(" + margin.left + "," + margin.top + ")");

    // Append legend and heatmap as <g> elements
    const legendGroup = svg.append("g")
        .attr("transform", "translate(100,0)");

    const heatmapGroup = svg.append("g")
        .attr("transform", "translate(100,70)");

    const tsvData = await d3.tsv("erc.dmel.selected.replicates.trypsin.gene.TPM.idr_NA.tsv")
    //Read the data

    const d3Data = tsvData.filter(d => genes.find(gene => gene.gene === d.geneName)).map(d => {
        const { geneName, ...ids } = d
        const entries = Object.entries(ids).map(([k, v]) => {
            return {
                geneName,
                labExpId: k,
                value: v
            }
        })
        return entries
    }).flat().filter(e => samples.find(s => s.labExpId === e.labExpId)).sort((a, b) => b.value - a.value)

    const columnValues = d3Data.map(d => parseFloat(d.value)); // Adjust "yourColumn" with the actual column name

    const [min, max] = d3.extent(columnValues)

    const myColor = d3.scaleSequential()
        .interpolator(d3.interpolateViridis)
        .domain([0.0, max])

    const header = d3Data.map(s => s.labExpId)

    // Build X scales and axis:
    var x = d3.scaleBand()
        .range([0, width])
        .domain(header)
        .padding(0.05);

    var xLegend = heatmapGroup.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickSize(0))

    xLegend.select(".domain").remove()

    xLegend.selectAll("text")
        .attr("transform", "rotate(-90)") // Rotate labels by -45 degrees
        .style("text-anchor", "end")
        .style("font-size", "1rem")
        // Set font size
        .text(d => {
            const sample = props.selectedSamples.find(s => s.labExpId === d)
            // console.log(sample)
            if (sample) return `${sample.tissue} ${sample.stage} ${sample.replicate}`
        })

    // Build Y scales and axis:
    var y = d3.scaleBand()
        .range([height, 0])
        .domain(genes.map(g => g.gene))
        .padding(0.05);


    var yLegend = heatmapGroup.append("g")
        .call(d3.axisLeft(y).tickSize(0))

    yLegend.select(".domain").remove()



    // create a tooltip
    d3.select("body").selectAll(".tooltip").remove()

    var tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0)
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "2px")
        .style("border-radius", "5px")
        .style("padding", "5px")

    // Three function that change the tooltip when user hover / move / leave a cell
    var mouseover = function (d) {
        tooltip
            .style("opacity", 1);

        d3.select(this)
            .style("stroke", "black")
            .style("opacity", 1);
    }

    var mousemove = function (event, d) {
        tooltip
            .html("TPM:" + d.value)
            .style("left", (event.pageX + 10) + "px") // Adjust the offset as needed
            .style("top", (event.pageY - 10) + "px")  // Adjust the offset as needed
    }
    var mouseleave = function (d) {
        tooltip
            .style("opacity", 0)
        d3.select(this)
            .style("stroke", "none")
            .style("opacity", 0.8)
    }

    yLegend.selectAll("text")
        .style("font-size", "1rem")
        .on("mouseover", function () {
            tooltip
                .style("opacity", 1);
            d3.select(this)
                .style("font-weight", "bold");
        })
        .on("mouseleave", function () {
            tooltip
                .style("opacity", 0)
            d3.select(this)
                .style("font-weight", "normal");
        }).
        on("mousemove", function (event, d) {
            const selectedFeature = props.selectedGenes.find(gene => gene.gene === d)
            const values = selectedFeature && selectedFeature.description ? selectedFeature.description.split('.') : [];
            const listItems = values.map(value => `<li>${value}</li>`).join('');
            tooltip
                .html(`<ul>${listItems}</ul>`).style("left", (event.pageX + 10) + "px") // Adjust the offset as needed
                .style("top", (event.pageY - 10) + "px")
        })
    // add the squares
    heatmapGroup.selectAll()
        .data(d3Data)
        .enter()
        .append("rect")
        .attr("x", function (d) { return x(d.labExpId) })
        .attr("y", function (d) { return y(d.geneName) })
        .attr("rx", 4)
        .attr("ry", 4)
        .attr("width", x.bandwidth())
        .attr("height", y.bandwidth())
        .style("fill", function (d) { return myColor(Number(d.value)) })
        .style("stroke-width", 4)
        .style("stroke", "none")
        .style("opacity", 0.8)
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave)

    const gradient = legendGroup.append("defs")
        .append("linearGradient")
        .attr("id", "gradient")
        .attr("x1", "0%")
        .attr("x2", "100%")
        .attr("y1", "0%")
        .attr("y2", "0%");

    gradient.selectAll("stop")
        .data(d3.range(0, 1.1, 0.1))
        .enter().append("stop")
        .attr("offset", d => `${d * 100}%`)
        .attr("stop-color", d => myColor(d3.interpolate(0.0, max)(d)));

    const legendScale = d3.scaleLinear()
        .domain([0.0, max])
        .range([0, legendWidth]);

    // Create legend axis
    const legendAxis = d3.axisBottom(legendScale)
        .tickValues([0.0, max / 4, max / 2, max])
        .tickFormat(d3.format(".1s"));

    legendGroup.append("g")
        .attr("transform", "translate(0,30)")
        .call(legendAxis);

    // Adjust legend axis ticks and text position
    legendGroup.selectAll("text")
        .style("text-anchor", "middle")

    // legendGroup.selectAll(".tick line")
    //     .attr("y2", -10);

    legendGroup.append("rect")
        .attr("width", legendWidth)
        .attr("height", 15)
        .style("fill", "url(#gradient)");

    legendGroup.append("text")
        .attr("x", -30)
        .attr("y", 20 / 2)
        .attr("text-anchor", "end")
        .style("font-size", "12px")
        .text("TPM");

}



</script>
<style>
.tooltip {
    position: absolute;
}
</style>