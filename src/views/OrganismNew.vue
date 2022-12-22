<template>
    <div class="row margin-spacer">
        <div class="flex lg3 md3">
            <div class="row margin-spacer">
                <div  lass="flex">
                    <h1 style="color:var(--va-info);" class="va-h2 title va-timeline-item__text">{{ selectedOrganism.title }}</h1>
                    <h1 style="color:var(--va-info);" class="va-h6 title va-timeline-item__text">{{ selectedOrganism.content }}</h1>
                </div>
            </div>
            <div class="row margin-spacer">
                <div class="flex lg12 md12 sm12 xs12">
                    <!-- <va-card>
                        <va-card-title>
                            timepoints
                        </va-card-title>
                        <va-card-content> -->
                            <va-tree-view
                                style="color:var(--va-info)"
                                v-model:checked="selectedNodes"
                                :nodes="tissueNodes"
                                expand-all
                            />
                        <!-- </va-card-content>
                        <va-card-title>
                            tissues
                        </va-card-title>
                        <va-card-content> -->
                            <va-tree-view
                                v-model:checked="selectedNodes"
                                :nodes="tissueNodes"
                                
                                expand-all
                            />
                        <!-- </va-card-content>
                    </va-card> -->
                </div>
            </div>
        </div>
        <div class="flex lg8 md8">
            <div class="row margin-spacer">
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
            <div v-if="tabValue === 'RNASeq' || tabValue === 'ChIPSeq'" class="row margin-spacer">
                <!-- <ScatterPlot /> -->
                <div class="flex lg12 md12">
                    <va-card>
                        <va-card-content>
                            <ExperimentFilters :options="expQuery[organism][tabValue]" @exp-input="updateQuery" @node-toggle="updateQuery"/>
                        </va-card-content>
                        <va-card-content>
                           <ExperimentListNewVue :experiments="Exp.renderedExps.slice(1,5)"/>
                        </va-card-content>
                    </va-card>
                </div>
            </div>
        </div>
    </div>
    <div class="row secondary-background margin-spacer">
        <div class="flex">
            <h1 style="color:var(--va-info);" class="va-h2 title va-timeline-item__text">{{ selectedOrganism.title }}</h1>
            <h1 style="color:var(--va-info);" class="va-h6 title va-timeline-item__text">{{ selectedOrganism.content }}</h1>
        </div>
    </div>
    <div class="row secondary-background margin-spacer">
        <div class="flex">
            <va-card color="secondary" no-padding-v>
                <va-card-content>
                    <va-timeline vertical style="min-width: 300px">
                        <va-timeline-item active>
                            <template #before>
                                <va-card stripe stripe-color="secondary">
                                    <va-card-content>
                                        <div class="row justify-end align-center">
                                            <div class="flex">
                                                <va-input
                                                    label="search a geneID"
                                                    v-model="geneID"
                                                >
                                                    <template #appendInner>
                                                        <va-icon
                                                        name="search"
                                                        />
                                                    </template>
                                                    <template #append>
                                                        <va-button
                                                            color="secondary"
                                                            @click="searchGeneId()"
                                                        >
                                                        Submit
                                                        </va-button>
                                                    </template>
                                                </va-input>
                                            </div>
                                        </div>
                                    </va-card-content>
                                    <va-card-content v-if="validFlyBaseResponse">
                                        {{geneIdSummary}}
                                    </va-card-content>
                                    <va-card-content v-if="geneIdPresent">
                                        <SGScatterPlot :data="data"/>
                                    </va-card-content>
                                </va-card>
                            </template>
                            <template #after>
                                <h2 style="color:var(--va-info);" class="va-h4 title va-timeline-item__text">
                                    Gene expression over time
                                </h2>
                            </template>
                        </va-timeline-item>
                        <va-timeline-item active>
                            <template #before>
                                <h2 style="color:var(--va-info);text-align: end;" class="va-h4 title va-timeline-item__text">
                                    RNA-Seq
                                </h2>
                            </template>
                            <template #after>
                                <va-card>
                                    <!-- <va-card-content>
                                        <div class="row">
                                            <div class="flex">
                                                <va-tree-view v-model:checked="selectedNodes" selectable :nodes="tissueNodes" />
                                            </div>
                                        </div>
                                    </va-card-content> -->
                                    <va-card-actions align="right">
                                        <va-button color="secondary">Search</va-button>
                                    </va-card-actions>
                                </va-card>
                            </template>
                        </va-timeline-item>
                        <va-timeline-item active>
                            <template #before>
                                <va-card>
                                    <!-- <va-card-content>
                                        <div class="row">
                                            <div class="flex">
                                                <va-tree-view v-model:checked="selectedNodes" selectable :nodes="tissueNodes" />
                                            </div>
                                        </div>
                                    </va-card-content> -->
                                    <va-card-actions align="right">
                                        <va-button color="secondary">Search</va-button>
                                    </va-card-actions>
                                </va-card>
                            </template>
                            <template #after>
                                <h2 style="color:var(--va-info);text-align: start;" class="va-h4 title va-timeline-item__text">
                                    ChIP-Seq
                                </h2>
                            </template>
                        </va-timeline-item>
                    </va-timeline>
                </va-card-content>
            </va-card>
        </div>
    </div>
</template>
<script setup>
import { organisms,timepoints,expQuery } from '../static-config';
import ScatterPlot from '../components/ScatterPlot.vue'
import {computed,onMounted,ref} from 'vue'
import {fExperiments,hExperiments} from '../stores/ExperimentStore'
import SGScatterPlot from '../components/SingleGeneScatterPlot.vue'
import rnaSeq from "../assets/notrypsin-rna-seq-fly-avg.json"
import FlyBaseService from "../services/FlyBaseService"
import TimePoints from '../components/TimePoints.vue'
import ExperimentListNewVue from '../components/ExperimentListNew.vue';
import ExperimentFilters from '../components/ExperimentFilters.vue';

const tabs = [
    { icon: 'menu_book', title: 'Overview',id:'Overview'},
    { title: 'RNA-Seq', id:'RNASeq' },
    { title: 'ChIP-Seq', id:'ChIPSeq' },
    { icon: 'search', title: 'Gene Expression', id:'GeneSearch' },
    { title: 'Genome Browser', id:'JBrowse' },

]
const tabValue = ref('Overview')

const Exp = props.organism === 'fly'? fExperiments():hExperiments()
const index=ref(1)
const pageSize=ref(5)
const props = defineProps({
    organism:String,
})
const selectedNodes = ref([])

const tissueNodes = [
          { id: 2, label: 'antenna' },
          { id: 3, label: 'eye' },
          { id: 4, label: 'leg' },
          {
            id: 5,
            label: 'wing',
            children: [
                { id: 6, label: 'anterior' },
                { id: 7, label: 'dorsal' },
                { id: 8, label: 'posterior' },
                { id: 9, label: 'ventral' },
                ],
            },
            {
                id:10,
                label:'genitalia'
            },
]

const geneID = ref("")
const data = ref({})
const geneIdSummary = ref("")
const validFlyBaseResponse = ref(false)
const geneIdPresent = ref(false)

function updateQuery(value){
    // console.log(value)
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
const selectedTimepoints = ref([])
const selectedOrganism = ref({})

onMounted(() => {
    console.log(Exp.renderedExps)
    selectedOrganism.value = organisms.find(org => org.id === props.organism)
    selectedTimepoints.value = timepoints.find(tp => tp.organism === props.organism).values
    // data.value = rnaSeq[0]
    // geneID.value = data.value.geneId
    // searchGeneId()
    Exp.loadExps()
})

const paginatedExps = computed(()=> {
    return Exp.renderedExps.slice(index.value-1, index.value+pageSize.value)
})

</script>