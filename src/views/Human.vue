<template>
    <Title :title="'Human'"/>
     <div class="row">
        <div style="overflow:auto;padding: 30px 0 30px 0" class="flex">
            <va-card outlined>
                <va-card-title>Experiment matrix</va-card-title>
                <va-card-content>

                </va-card-content>
            </va-card>
        </div>
        <div style="overflow:auto;padding: 30px 0 30px 0" class="flex">
            <va-card outlined >
                <va-card-title>Experiment matrix</va-card-title>
                <va-card-content>
                    <CustomTable
                        v-if="Object.keys(Experiments.table).length"
                        :organism="Experiments.table"
                    />
                </va-card-content>
            </va-card>
        </div>
    </div>
    <div class="row">
        <div class="flex lg10">
            <ExperimentList/>
        </div>

    </div>
</template>
<script setup>
import {experiments} from '../stores/experiments'
import {ref, reactive,onMounted,computed, watch} from 'vue'
import Title from '../components/Title.vue'
import CustomTable from '../components/CustomTable.vue'
import ExperimentList from '../components/ExperimentList.vue'
import {dataTypes,timepoints} from '../static-config'


const organism = 'human'
const Experiments = experiments()

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