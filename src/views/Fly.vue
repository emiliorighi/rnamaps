<template>
    <Title :title="'Fly'"/>
     <div class="row">
        <div style="overflow:auto" class="flex lg12">
            <CustomTable
                :organism="Experiments.table"
                :timepoints="flyStages"
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
import {ref,computed, reactive,onMounted} from 'vue'
import Title from '../components/Title.vue'
import CustomTable from '../components/CustomTable.vue'
import ExperimentList from '../components/ExperimentList.vue'
import {fly} from '../assets/schemas/metadata.json'
import {experiments} from '../stores/experiments'


const organism = 'fly'
const Experiments = experiments()
const metadata = {...fly}

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
const filteredExps = ref([])

const dataTypes=reactive([ 
    {label:'RNAseq',active:false},
    {label:'ChIPseq',active:false}])

const flyStages = reactive([
    {label:"L3", value:"L3",active:false},
    {label:"LP", value:"LP",active:false},
    {label:"WP", value:"WP",active:false}
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