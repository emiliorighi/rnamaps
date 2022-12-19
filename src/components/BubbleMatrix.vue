<template>
    <svg style="overflow:visible" ref="matrix"></svg>
    <div style="position:absolute" ref="tooltip"/>
</template>
<script setup>
import {onMounted, ref} from "vue"
import * as d3 from "d3";

const matrix = ref(null)
const tooltip = ref(null)
const margin = {top: 10, right: 100, bottom: 30, left: 30},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

const tissues = ['antenna','leg','wing','eye']
const timepoints = ['L3','WP','LP']
// const props = defineProps({
//     data: Array //up to 50 genes
// })

const data = [
{
        "geneId": "FBgn0266404",
        "tissues": [
            {
                "tissueName": "antenna",
                "values": [
                    {
                        "time": "L3",
                        "value": "9973.05"
                    },
                    {
                        "time": "WP",
                        "value": "9970.46"
                    },
                    {
                        "time": "LP",
                        "value": "2936.44"
                    }
                ]
            },
            {
                "tissueName": "leg",
                "values": [
                    {
                        "time": "L3",
                        "value": "1611.29"
                    },
                    {
                        "time": "WP",
                        "value": "1888.17"
                    },
                    {
                        "time": "LP",
                        "value": "4261.01"
                    }
                ]
            },
            {
                "tissueName": "wing",
                "values": [
                    {
                        "time": "L3",
                        "value": "0"
                    },
                    {
                        "time": "WP",
                        "value": "15840.47"
                    },
                    {
                        "time": "LP",
                        "value": "1229.15"
                    }
                ]
            },
            {
                "tissueName": "eye",
                "values": [
                    {
                        "time": "L3",
                        "value": "4906.14"
                    },
                    {
                        "time": "WP",
                        "value": "2739.27"
                    },
                    {
                        "time": "LP",
                        "value": "2685.09"
                    }
                ]
            }
        ]
    },
    {
        "geneId": "FBgn0266405",
        "tissues": [
            {
                "tissueName": "antenna",
                "values": [
                    {
                        "time": "L3",
                        "value": "1383.28"
                    },
                    {
                        "time": "WP",
                        "value": "2372.25"
                    },
                    {
                        "time": "LP",
                        "value": "0"
                    }
                ]
            },
            {
                "tissueName": "leg",
                "values": [
                    {
                        "time": "L3",
                        "value": "38.46"
                    },
                    {
                        "time": "WP",
                        "value": "870.57"
                    },
                    {
                        "time": "LP",
                        "value": "5704.07"
                    }
                ]
            },
            {
                "tissueName": "wing",
                "values": [
                    {
                        "time": "L3",
                        "value": "683.11"
                    },
                    {
                        "time": "WP",
                        "value": "9265.35"
                    },
                    {
                        "time": "LP",
                        "value": "5136.34"
                    }
                ]
            },
            {
                "tissueName": "eye",
                "values": [
                    {
                        "time": "L3",
                        "value": "1646.48"
                    },
                    {
                        "time": "WP",
                        "value": "1207.13"
                    },
                    {
                        "time": "LP",
                        "value": "2186.02"
                    }
                ]
            }
        ]
    }
]

onMounted(() => {
    matrix.value.focus()
    tooltip.value.focus()
    createPlot()

})

function createPlot(){

    const svg = d3.select(matrix.value)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    const myColor = d3.scaleOrdinal()
      .domain(tissues)
      .range(d3.schemeCategory10);

    const xDomain = []
    
    tissues.forEach(t => {
        timepoints.forEach(tp => {
            xDomain.push(`${t}_${tp}`)
        })
    })

    const yDomain = data.map(d => d.geneId)

    console.log(xDomain)
    const x = d3.scaleOrdinal()
                .domain(xDomain).range(xDomain.map((d,i) => i * 100 + 30))

    const y = d3.scaleOrdinal().domain(yDomain).range([height-40, 0])

    svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x)
    // .tickFormat((d,i)=>timepoints[i])
    );

    svg.append("g")
      .call(d3.axisLeft(y));


    svg.selectAll('myDots')
        .data(data)
        .append('circle')
        
}
</script>