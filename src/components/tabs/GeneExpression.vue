<template>
    <div class="row">
        <div class="flex lg4 md4 sm12 xs12">
            <va-input
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
    <div v-if="showPlot" class="row justify-center">
        <div class="flex margin-spacer">
            <SingleGeneScatterPlot :data="data"/>
        </div>
        <div v-if="response.success" class="flex">
            <div class="row">
                <div class="flex">
                    <h1 style="color:var(--va-secondary);" class="va-h6 title">{{ response.id }}</h1>
                </div>
            </div>
            <div class="row">
                <div class="flex">
                    <span>{{ response.description }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import FlyBaseService from "../../services/FlyBaseService"
import SingleGeneScatterPlot from "../SingleGeneScatterPlot.vue"
import rnaSeq from "../../assets/notrypsin-rna-seq-fly-avg.json"
import {ref, reactive} from "vue"

const id = ref("")
const showPlot = ref(false)
const data = ref({})
const geneIdSummary = ref("")

const validFlyBaseResponse = ref(false)
const geneIdPresent = ref(false)

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
        if(data.value){
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