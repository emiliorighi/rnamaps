<template>
    <div class="row margin-spacer align-center">
        <div class="flex lg3 md3">
            <div class="row margin-spacer">
                <div class="flex">
                    <h1 style="color:var(--va-info);" class="va-h2 title va-timeline-item__text">{{ selectedOrganism.title }}</h1>
                    <h1 style="color:var(--va-info);" class="va-h6 title va-timeline-item__text">{{ selectedOrganism.content }}</h1>
                </div>
            </div>
        </div>
        <div class="flex lg8 md8 sm12 xs12">
            <div class="row margin-spacer">
                <va-timeline :key="counter" style="width: 100%;overflow-x: scroll;">
                    <va-timeline-item :active="index<=tpIndex"  v-for="(tp,index) in selectedOrganism.timepoints" :key="index" color="info">
                        <template #before>
                            <div style="color:var(--va-info)" class="title va-text-center" >
                                <va-button @click.right.stop.prevent="tpIndex=index-1;counter++" @click.left="tpIndex=index;counter++" preset="secondary" color="info">{{ tp.label }}</va-button>
                            </div>
                        </template>
                    </va-timeline-item>
                </va-timeline>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="flex lg3 md3">
            <div class="row margin-spacer">
                <va-tabs color="info" vertical grow v-model="tabValue">
                    <template #tabs>
                        <va-tab
                            v-for="tab in tabs"
                            :key="tab.id"
                            :name="tab.id"
                            :disabled="tab.id === 'JBrowse'"
                            >
                            <va-icon v-if="tab.icon" :name="tab.icon"/>
                            {{ tab.title }}
                        </va-tab>
                    </template>
                </va-tabs>
            </div>
        </div>
        <div class="flex lg8 md8 sm12 xs12">
            <div class="row">
                <div class="flex lg12 md12 sm12 xs12">
                    <va-tabs color="info" grow v-model="tabValue">
                        <template #tabs>
                            <va-tab
                                v-for="tab in tabs"
                                :key="tab.id"
                                :name="tab.id"
                                :disabled="tab.id === 'JBrowse'"
                                >
                                <va-icon v-if="tab.icon" :name="tab.icon"/>
                                {{ tab.title }}
                            </va-tab>
                        </template>
                    </va-tabs>
                </div>
            </div>
            <div v-if="tabValue === 'RNAseq' || tabValue === 'ChIPseq'" class="row margin-spacer">
                <div class="flex lg12 md12">
                    <va-card>
                        <va-card-content>
                            <ExperimentFilters :selected-nodes="selectedNodes" :options="reactiveQuery[organism][tabValue]" @exp-input="search" @node-toggle="updateQuery"/>
                        </va-card-content>
                        <va-card-content>
                            <div class="row align-center justify-space-between">
                                <div class=flex>
                                    <div class="row">
                                        <div v-for="(node, index) in selectedNodes" :key="index" class="flex">
                                            <va-chip closeable @click="removeNode(index)" outline color="secondary">{{node}}</va-chip>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex">
                                    <div class="row align-center">
                                        <div class="flex">
                                            <span style="color:var(--va-secondary)">1 - 5 of 200</span>
                                        </div>
                                        <div class="flex">
                                            <va-button size="large" preset="secondary" color="secondary" round icon="chevron_left" />
                                        </div>
                                        <div class="flex">
                                            <va-button size="large" preset="secondary" color="secondary" round icon="chevron_right" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                           <ExperimentListNewVue :experiments="paginatedExps"/>
                        </va-card-content>
                    </va-card>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { organisms,expQuery } from '../static-config';
import {computed,onMounted,ref, watch,reactive} from 'vue'
import rnaSeq from "../assets/notrypsin-rna-seq-fly-avg.json"
import FlyBaseService from "../services/FlyBaseService"
import ExperimentListNewVue from '../components/ExperimentListNew.vue';
import ExperimentFilters from '../components/ExperimentFilters.vue';
import { query } from '../stores/query';
import schema from '../assets/metadata.json'

const tpIndex = ref(4)
const counter = ref(0)
const reactiveQuery = reactive(expQuery)

var organismExperiments = []
var dataTypeExperiments = []
const experiments=ref([])
const selectedNodes = ref([])
const tabs = [
    { icon: 'menu_book', title: 'Overview',id:'Overview'},
    { title: 'RNA-Seq', id:'RNAseq' },
    { title: 'ChIP-Seq', id:'ChIPseq' },
    { icon: 'search', title: 'Gene Expression', id:'GeneSearch' },
    { title: 'Genome Browser', id:'JBrowse' },
]

const expUpdate = ref(true)
const tabValue = ref('Overview')
const props = defineProps({
    organism:String,
})

const geneID = ref("")
const data = ref({})
const geneIdSummary = ref("")
const validFlyBaseResponse = ref(false)
const geneIdPresent = ref(false)
const index=ref(1)
const pageSize=ref(5)

function resetPagination(){
    index.value = 1
    pageSize.value = 5
}
const paginatedExps = computed(()=> {
    return dataTypeExperiments.slice(index.value-1, index.value+pageSize.value)
})

watch(tabValue,()=>{
    if(tabValue.value === 'RNAseq' || tabValue.value === 'ChIPseq'){
        dataTypeExperiments = organismExperiments.filter(exp => exp.dataType === tabValue.value)
    }
})

function search(){

}

function updateQuery(values, key){
    selectedNodes.value = values
    reactiveQuery[props.organism][tabValue.value].find(opt => opt.key === key).disabled = !reactiveQuery[props.organism][tabValue.value].find(opt => opt.key === key).disabled
    expUpdate.value = false
    if(values.length){
        dataTypeExperiments = organismExperiments.filter(exp => {
        if(Object.values(exp).filter(value => values.includes(value)).length === values.length){
                return true
            }
            return false
        })
    }else{
        dataTypeExperiments = organismExperiments
    }
    expUpdate.value = true
}

function removeNode(index){
    const value = selectedNodes.value[index]
    selectedNodes.value.splice(index,1)
    reactiveQuery[props.organism][tabValue.value].forEach(opt => {
        if(opt.nodes.map(node => node.id).includes(value)){
            opt.disabled=false
        }
    })
    expUpdate.value = false
    dataTypeExperiments = organismExperiments.filter(exp => exp.dataType === tabValue.value)
    expUpdate.value = true

}

function searchGeneId(){
    geneIdPresent.value = false
    FlyBaseService.getGeneIdSummary(geneID.value)
    .then(resp => {
        if(resp.data && resp.data.resultset && resp.data.resultset.result && resp.data.resultset.result.length){
            geneIdSummary.value = resp.data.resultset.result[0].summary
            validFlyBaseResponse.value = true
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
    })
}
const selectedOrganism = ref({})

onMounted(() => {
    organismExperiments = schema[props.organism]
    selectedOrganism.value = organisms.find(org => org.id === props.organism)
})

</script>