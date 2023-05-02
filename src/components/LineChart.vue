<template>
    <Line
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </template>
  
<script setup>
  import {
  Chart as ChartJS,
  Filler,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
)

const props = defineProps({
    chartData:Object,
    chartOptions:Object
})

</script>
  