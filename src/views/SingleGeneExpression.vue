<template>
    <div class="row">
        <div class="flex lg4 md4 sm12 xs12">
            <va-card>
                <va-card-content>
                <va-input
                    v-model="geneID"
                    label="search a geneID"
                    >
                    <template #appendInner>
                        <va-icon
                        name="search"
                        />
                    </template>
                    <template #append>
                        <va-button
                        @click="searchGeneId()"
                        >
                        Submit
                        </va-button>
                    </template>
                </va-input>
                </va-card-content>
            </va-card>
        </div>
        <div class="flex lg8 md8 sm12 xs12">
            <va-card v-if="geneIdPresent">
                <va-card-title>
                    {{geneID}}
                </va-card-title>
                <va-card-content v-if="validFlyBaseResponse">
                    {{geneIdSummary}}
                </va-card-content>
                <va-card-content>
                    <ScatterPlot :data="data"/>
                </va-card-content>
            </va-card>
        </div>
    </div>
</template>
<script setup>
import FlyBaseService from "../services/FlyBaseService"
import ScatterPlot from "../components/ScatterPlot.vue"
import rnaSeq from "../assets/notrypsin-rna-seq-fly-avg.json"
import {ref} from "vue"

const geneID = ref("")
const data = ref({})
const geneIdSummary = ref("")

const validFlyBaseResponse = ref(false)
const geneIdPresent = ref(false)

function searchGeneId(){
    geneIdPresent.value = false
    FlyBaseService.getGeneIdSummary(geneID.value)
    .then(resp => {
        if(resp.data && resp.data.resultset && resp.data.resultset.result && resp.data.resultset.result.length){
            geneIdSummary.value = resp.data.resultset.result[0].summary
            validFlyBaseResponse.value = true
            // validResponse.value = true
        }
        data.value = rnaSeq.find(gene => gene.geneId === geneID.value)
        if(data.value){
            geneIdPresent.value = true
        }
    })
    .catch(error => {
        console.log(error)
        data.value = rnaSeq.find(gene => gene.geneId === geneID.value)
        if(data.value){
            geneIdPresent.value = true
        }
        // validResponse.value = true
        // geneID.value=""
        // geneIdSummary.value = `${geneID.value} not found in FlyBase `
    })
}

</script>