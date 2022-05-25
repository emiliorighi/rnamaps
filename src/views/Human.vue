<template>
    <Title :title="'Human'"/>
     <div class="row">
        <div style="overflow:auto" class="flex lg12">
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
            <ExperimentList :experiments="filteredExps"/>
        </div>
    </div>
</template>
<script setup>
import {experiments} from '../stores/experiments'
import {ref,computed, reactive,onMounted} from 'vue'
import Title from '../components/Title.vue'
import CustomTable from '../components/CustomTable.vue'
import ExperimentList from '../components/ExperimentList.vue'
import {human} from '../assets/schemas/metadata.json'


const organism = 'human'
const Experiments = experiments()
const metadata = {...human}

onMounted(() =>{
//convert metadata into reactive table
Object.keys(metadata).forEach(key1 => {
    Object.keys(metadata[key1]).forEach(key2 => {
        metadata[key1][key2] = {
            active: false,
            value: metadata[key1][key2].length
        }
    })
})

Experiments.table = {...metadata}
})

const dataTypes=reactive([
    {label:'Proteomics',active:false},
    {label:'RibosomeProfiling',active:false}, 
    {label:'RNAseq',active:false},
    {label:'ChIPseq',active:false}])

const query = ref([])

const filteredExps = ref([])

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

function updateExps(exps){
    filteredExps.value = [...exps]
}

</script>
<style scoped>
.timepoints{
    rotate: -45deg;
}
/* tr.space-under>td {
  padding-bottom: 1em;
} */
tbody:before {
    content:"@";
    display:block;
    line-height:10px;
    text-indent:-99999px;
}
.sticky-col {
  position: -webkit-sticky;
  position: sticky;
  background-color: white;
}

.first-col {
    left: -5px;
    text-align: end;
    background-color: white;
    z-index: 1000;
    padding:.8rem
}
</style>