<template>
    <div class="row">
        <div style="padding-top:16px;" class="flex lg3 md3">
            <div class="row margin-spacer">
                <h6 style="color:var(--va-info);" class="va-h6">
                    Gene Expression
                </h6>
            </div>
            <div class="row margin-spacer">
                <div class="flex">
                    <va-input
                        style="width:100%"
                        v-model="id"
                        label="Search"
                        @keyup.enter="searchGeneId()"
                        placeholder="Example: FBgn0283432"
                    >
                        <template #appendInner>
                            <va-icon name="search"/>
                        </template>
                        <template #append>
                            <va-button color="secondary" @click="searchGeneId()">Submit</va-button>
                        </template>
                    </va-input>
                </div>
            </div>
            <div style="max-height:66vh;overflow:auto" class="row margin-spacer">
                <div class="flex">
                    <!-- <Filters :filters="filters" :options="reactiveQuery[organism][tabValue]" @item-toggled="updateQuery"/> -->
                </div>
            </div>
        </div>
        
        <div class="flex lg9 md9 margin-spacer">
            <va-card v-if="showPlot"> 
                <va-card-content v-if="showPlot">
                    <div class="row justify-space-between align-center">
                        <div class="flex lg6 md6 sm12 xs12">
                            <LineChart :chart-data="chartData" :chart-options="chartOptions"/>
                        </div>
                        <div class="flex lg6 d6 sm12 xs12 margin-spacer">
                            <div class="row">
                                <strong>{{ response.id }}</strong>
                            </div>
                            <div class="row">
                                {{ response.description }}
                            </div>
                        </div>
                    </div>
                </va-card-content>
            </va-card>
        </div>
    </div>
</template>
<script setup>
import FlyBaseService from "../../services/FlyBaseService"
import SingleGeneScatterPlot from "../SingleGeneScatterPlot.vue"
import rnaSeq from "../../assets/notrypsin-rna-seq-fly-avg.json"
import {ref, reactive} from "vue"
import LineChart from '../LineChart.vue'

const id = ref("")
const showPlot = ref(false)
const data = ref({})

const chartData = reactive({
    labels:['L3','WP','LP'],
    datasets:[]
})

const chartOptions = reactive({
    responsive:true,
    plugins: {
        title: {
            display: true,
            text: id.value
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

const response = reactive({
    id:'',
    description:'',
    success:false
})

function validateResponse(resp){
    return resp.data && resp.data.resultset && resp.data.resultset.result && resp.data.resultset.result.length
}
function searchGeneId(){
    showPlot.value = false
    FlyBaseService.getGeneIdSummary(id.value)
    .then(resp => {
        if(!validateResponse(resp)){
            response.success = false
            return
        }
        response.description = resp.data.resultset.result[0].summary
        response.success = true
        response.id = id.value
        data.value = rnaSeq.find(gene => gene.geneId === id.value)
        console.log(data.value)
        if(data.value){
            chartData.datasets = data.value.tissues.map(tissue => {
                return {
                    // backgroundColor: '#7B287D',
                    borderColor: '#7B287D',
                    label: tissue.tissueName,
                    data: tissue.values.map(v => v.value),
                    backgroundColor: (ctx) => {
                    const canvas = ctx.chart.ctx;
                    const gradient = canvas.createLinearGradient(0,0,0,160);
                    gradient.addColorStop(0, '#7B287D');
                    return gradient;
                    },
                }
            })
            showPlot.value = true
        }
    })
    .catch(error => {
        console.log(error)
        data.value = rnaSeq.find(gene => gene.geneId === id.value)
        if(data.value){
            showPlot.value = true
        }
    })
}

</script>