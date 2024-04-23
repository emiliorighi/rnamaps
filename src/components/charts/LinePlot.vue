<template>
    <Line v-if="chartData.datasets.length" :data="chartData" :options="chartOptions" />
</template>

<script lang="ts" setup>
import {
    Chart as ChartJS,
    Filler,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
    ChartDataset,
    Point
} from 'chart.js'

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
import { ref, watchEffect } from 'vue';
import { Line } from 'vue-chartjs'
import { useSampleData, getExpressionValues } from '../../../utils';

const props = defineProps<{
    geneId: string
}>()


const colors = [
    '#1f77b4', // Dark Blue
    '#ff7f0e', // Orange
    '#2ca02c', // Green
    '#d62728', // Red
    '#9467bd', // Purple
    '#8c564b', // Brown
    '#e377c2', // Pink
    '#7f7f7f', // Gray
    '#bcbd22', // Olive
    '#17becf'  // Turquoise
];

const labels = ['L3', 'WP', 'LP']

const chartData = ref<ChartData<'line'>>({
    labels: labels,
    datasets: []
})

watchEffect(async () => {
    const expValue = await getExpressionValues(props.geneId)
    const samples = await useSampleData('RNAseq', 'fly')
    const datasets = mapDatasets(expValue.parsedData, samples.parsedData)
    chartData.value = { labels, datasets }
})

function mapDatasets(expressionValues: Record<string, any>, samples: Record<string, any>[]) {
    // Extract gene names from the first row of geneData

    // Initialize datasets array
    const datasets = [] as ChartDataset<"line", (number | Point | null)[]>[];

    const tissues = Array.from(new Set(samples.map(s => s.tissue)))
    const entries = Object.entries(expressionValues)

    tissues.forEach((l, index) => {
        const samplesByTissue = samples.filter(s => s.tissue === l)
        const data = labels.map(l => {
            let uniqueEntries = {} as Record<string, number>
            const samplesByStage = samplesByTissue.filter(s => s.stage === l)
            const filteredEntries = entries
                .filter(([k, v]) => samplesByStage.find(s => s.labExpId === k))

            filteredEntries.forEach(([k, v]) => {
                const header = k.split('.')[0]
                if (uniqueEntries[header]) {
                    const average = (uniqueEntries[header] + v) / 2
                    uniqueEntries[header] = average
                } else {
                    uniqueEntries[header] = v
                }
            })
            return Object.values(uniqueEntries)[0] ? Object.values(uniqueEntries)[0] : 0
        })
        datasets.push({
            label: l, fill: false,
            backgroundColor: colors[index],
            borderColor: colors[index],
            data
        })
    })
    return datasets
}

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
                text: 'Timepoints'

            },
            y: {

                display: true,
                text: 'TPMs'

            }
        }
    }
})


</script>../../uitls/getExpressionValues../../uitls/useSampleData