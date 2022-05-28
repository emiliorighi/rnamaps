<template>
    <Title :title="'Fly'"/>
     <div class="row">
        <div style="overflow:auto;padding:30px" class="flex align-self--center">
            <CustomTable
                v-if="Object.keys(Experiments.table).length"
                :organism="Experiments.table"
                :timepoints="flyStages"
                :dataTypes="dataTypes"
            />
        </div>
        <div class="flex align-self--center">
            <va-select
                v-model="selectedTissue"
                class="mb-4"
                label="Tissue"
                color="#872674"
                :options="tissues"
            />
            <va-select
                v-if="selectedTissue === 'wing'"
                v-model="selectedCompartment"
                class="mb-4"
                label="Wing Compartment"
                color="#872674"
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
import {ref, reactive,onMounted} from 'vue'
import Title from '../components/Title.vue'
import CustomTable from '../components/CustomTable.vue'
import ExperimentList from '../components/ExperimentList.vue'
import {experiments} from '../stores/experiments'


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

const dataTypes=reactive([ 
    {label:'RNAseq',active:false},
    {label:'ChIPseq',active:false}])

const flyStages = reactive([
    {label:"L3", value:"L3",active:false},
    {label:"LP", value:"LP",active:false},
    {label:"WP", value:"WP",active:false}
])


</script>
<style scoped>
</style>