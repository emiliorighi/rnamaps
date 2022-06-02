<template>
    <Title :title="'Human'"/>
     <div class="row justify--start">
        <div  style="overflow:auto;padding: 30px 0 30px 0" class="flex">

            <CustomTable
                v-if="Object.keys(Experiments.table).length"
                :organism="Experiments.table"
            />
        </div>
     </div>
     <div class="row">
         <div class="flex lg3">
             <span class="title"> {{Experiments.index-1+pageSize}} of {{total}}</span>
         </div>
     </div>
     <div class="row justify--end">
         <div class="flex lg3">
            <va-button-toggle
                outline
                color="secondary"
                size="small"
                v-model="pageSize"
                :options="pageOpts"
            />
         </div>
        <div class="flex lg3">
            <va-pagination
                color="secondary"
                size="small"
                :visible-pages="5"
                v-model="Experiments.index"
                :total="total"
                boundary-numbers
                :page-size="pageSize"
                hide-on-single-page
            />
         </div>
     </div>
    <div class="row">
        <div class="flex lg3">
            <va-select
                class="exp-selector"
                v-model="selectedDt"
                label="DataTypes"
                color="secondary"
                :options="Experiments.dataTypes.map(dt => dt.label)"
            />
            <va-select
                class="exp-selector"
                v-model="selectedTp"
                label="Timepoints"
                color="secondary"
                :options="Experiments.timepoints.map(tp => tp.value)"
            />
            <va-select
                class="exp-selector"
                v-model="selectedFr"
                label="Fraction"
                color="secondary"
                :options="['Whole Cell RNA','Cytoplasm RNA','Nucleus RNA']"
            />
        </div>
        <div class="flex lg9">
            <ExperimentCards/>
        </div>
    </div>
</template>
<script setup>
import {experiments} from '../stores/experiments'
import {ref, reactive,onMounted,computed, watch} from 'vue'
import Title from '../components/Title.vue'
import CustomTable from '../components/CustomTable.vue'
import ExperimentCards from '../components/ExperimentCards.vue'
import ExperimentList from '../components/ExperimentList.vue'
import {dataTypes,timepoints} from '../static-config'
import CellSvg from '../components/CellSvg.vue'

const pageOpts=  [
        { label: '5', value: 5 },
        { label: '10', value: 10 },
        { label: '20', value: 20 },
      ]
const organism = 'human'
const Experiments = experiments()
const selectedDt = ref('')
const selectedTp= ref('')
const selectedFr = ref('')
const pageSize=ref(5)

const total = computed(() => {
    return Experiments.renderedExps.length
})
const expsToRender = computed(() => {
    return Experiments.renderedExps.slice(Experiments.index-1, Experiments.index+pageSize.value)
})
onMounted(()=>{
    Experiments.currentOrganism = organism
    Experiments.dataTypes = [...dataTypes[organism]]
    Experiments.timepoints = [...timepoints[organism]]
    Experiments.createMatrix()
    Experiments.loadExps()
})

</script>
<style scoped>
.exp-selector{
    margin: 10px 0 10px 0;
}
</style>