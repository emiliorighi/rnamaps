<template>
    <Line :data="chartData" :options="chartOptions" />
</template>

<script lang="ts" setup>
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
} from 'chart.js'
import { ref, watchEffect } from 'vue';
import { Line } from 'vue-chartjs'
import { getExpressionValues } from '../../composables/getExpressionValues'

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend)

const props = defineProps<{
    geneId: string
}>()

const chartData = ref({
    labels: ['L3', 'WP', 'LP'],
    datasets: []
})

watchEffect(async () => {
    const { parsedData } = await getExpressionValues(props.geneId)
    chartData.value.datasets = data.value.tissues.map(tissue => {
        return {
            // backgroundColor: '#7B287D',
            borderColor: '#7B287D',
            label: tissue.tissueName,
            data: tissue.values.map(v => v.value),
            backgroundColor: (ctx) => {
                const canvas = ctx.chart.ctx;
                const gradient = canvas.createLinearGradient(0, 0, 0, 160);
                gradient.addColorStop(0, '#7B287D');
                return gradient;
            },
        }
    })
})

const chartOptions = ref({
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: `${props.geneId} expression`
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Timepoints'
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'TPMs'
                }
            }
        }
    }
})

const data = {
    datasets: [
        {
            label: 'Scatter Dataset 1',
            fill: false,
            borderColor: '#f87979',
            backgroundColor: '#f87979',
            data: [
                {
                    x: -2,
                    y: 4
                },
                {
                    x: -1,
                    y: 1
                },
                {
                    x: 0,
                    y: 0
                },
                {
                    x: 1,
                    y: 1
                },
                {
                    x: 2,
                    y: 4
                }
            ]
        },
        {
            label: 'Scatter Dataset 2',
            fill: false,
            borderColor: '#7acbf9',
            backgroundColor: '#7acbf9',
            data: [
                {
                    x: -2,
                    y: -4
                },
                {
                    x: -1,
                    y: -1
                },
                {
                    x: 0,
                    y: 1
                },
                {
                    x: 1,
                    y: -1
                },
                {
                    x: 2,
                    y: -4
                }
            ]
        }
    ]
}

const options = {
    responsive: true,
    maintainAspectRatio: false
}

</script>