<template>
    <div class="row">
        <div class="flex lg4 md4">
            <OrganismSideBar :organism="organism"/>
        </div>
        <div class="flex lg8 md8 sm12 xs12">
            <div v-for="exp in paginatedExps" :key="exp.labExpId" class="row margin-spacer">
                <div class="flex lg12 md12 sm12 xs12">
                    <va-card stripe stripe-color="secondary">
                        <va-card-title>
                            <h6 class="va-h6">{{exp.labExpId}}</h6>
                        </va-card-title>
                        <va-card-content>
                            <div class="row align-top">
                                <div class="flex">
                                    <div class="row">
                                        <div class="flex lg12" style="margin-left:25px;">
                                            <ul>
                                                <li>DataType: <span class="text--secondary">{{exp.dataType}}</span></li>
                                                <li>Tissue: <span class="text--secondary">{{exp.tissue}}</span></li>
                                                <li>Platform: <span class="text--secondary">{{exp.platform}}</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex">
                                    
                                </div>
                            </div>

                        </va-card-content>
                    </va-card>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import OrganismSideBar from '../components/OrganismSideBar.vue';
import { timepoints, dataTypes } from '../static-config';
import {computed,ref} from 'vue'
import {fExperiments,hExperiments} from '../stores/ExperimentStore'

const Exp = props.organism === 'fly'? fExperiments():hExperiments()
const index=ref(1)
const pageSize=ref(5)
const props = defineProps({
    organism:String,
})

const paginatedExps = computed(()=> {
    return Exp.renderedExps.slice(index.value-1, index.value+pageSize.value)
})

</script>