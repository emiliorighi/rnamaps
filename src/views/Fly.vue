<template>
    <Title :title="'Fly'"/>
     <div class="row">
        <div style="overflow:auto;padding:30px" class="flex align-self--center">
            <CustomTable
                v-if="Object.keys(Experiments.table).length"
                :organism="Experiments.table"
            />
        </div>
        <div class="flex align-self--center">
            <va-select
                v-model="selectedTissue"
                class="mb-4"
                label="Tissue"
                color="secondary"
                :options="tissues"
            />
            <va-select
                v-if="selectedTissue === 'wing'"
                v-model="selectedCompartment"
                class="mb-4"
                label="Wing Compartment"
                color="secondary"
                :options="compartments"
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
import {ref, reactive,onMounted,watch} from 'vue'
import Title from '../components/Title.vue'
import CustomTable from '../components/CustomTable.vue'
import ExperimentList from '../components/ExperimentList.vue'
import {experiments} from '../stores/experiments'
import {dataTypes,timepoints} from '../static-config'

const organism = 'fly'
const Experiments = experiments()

const tissues = reactive([
    'wing', 'eye', 'antenna', 'leg', 'eye-antenna', 'genitalia'
])
const compartments = reactive([
    'whole tissue', 'anterior', 'dorsal', 'posterior', 'ventral'
])
const selectedTissue=ref('')
const selectedCompartment=ref('')

onMounted(()=>{
    Experiments.currentOrganism = organism
    Experiments.dataTypes = [...dataTypes[organism]]
    Experiments.timepoints = [...timepoints[organism]]
    Experiments.createMatrix()
    Experiments.loadExps()
})



</script>
<style scoped>
</style>