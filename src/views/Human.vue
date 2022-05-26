<template>
    <Title :title="'Human'"/>
     <div class="row">
        <div style="overflow:auto;padding:30px" class="flex">
            <CustomTable
                v-if="Object.keys(Experiments.table).length"
                :organism="Experiments.table"
                :timepoints="timepoints"
                :dataTypes="dataTypes"
            />
        </div>
    </div>
    <div class="row">
        <div class="flex">
            <ExperimentList/>
        </div>
    </div>
</template>
<script setup>
import {experiments} from '../stores/experiments'
import {ref, reactive,onMounted} from 'vue'
import Title from '../components/Title.vue'
import CustomTable from '../components/CustomTable.vue'
import ExperimentList from '../components/ExperimentList.vue'


const organism = 'human'
const Experiments = experiments()

onMounted(() =>{
//convert metadata into reactive table
    Experiments.currentOrganism = organism
    Experiments.createQueryTable()

})

const dataTypes=reactive([
    {label:'Proteomics',active:false},
    {label:'RibosomeProfiling',active:false}, 
    {label:'RNAseq',active:false},
    {label:'ChIPseq',active:false}])

const timepoints = reactive([
    {label: "Oh",value: "00d00h00m",active:false},
    {label: "3h",value: "00d03h00m",active:false},
    {label: "6h",value: "00d06h00m",active:false},
    {label: "9h",value: "00d09h00m",active:false},
    {label: "12h",value: "00d12h00m",active:false},
    {label: "18h",value: "00d18h00m",active:false},
    {label: "1d",value: "01d00h00m",active:false},
    {label: "1d12h",value: "01d12h00m",active:false},
    {label: "2d",value: "02d00h00m",active:false},
    {label: "3d",value: "03d00h00m",active:false},
    {label: "5d",value: "05d00h00m",active:false},
    {label: "7d",value: "07d00h00m",active:false},
])

</script>
<style scoped>

</style>