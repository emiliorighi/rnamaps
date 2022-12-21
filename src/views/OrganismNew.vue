<template>
    <div class="row margin-spacer secondary-background">
        <div class="flex margin-spacer lg3 md4">
            <!-- <div class="row">
                <va-image contain class="flex lg12 md12 sm12 xs12" style="height:300px;background-color: var(--va-info);border-radius: 10%;" :src="selectedOrganism.imagePath"/>
            </div> -->
            <div class="row">
                <div class="flex">
                    <h1 style="color:var(--va-info);" class="va-h2 title va-timeline-item__text">{{ selectedOrganism.title }}</h1>
                    <h1 style="color:var(--va-info);" class="va-h6 title va-timeline-item__text">{{ selectedOrganism.content }}</h1>
                </div>
            </div>
            <div class="row margin-spacer">
                <div class="flex">
                    <va-card>
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
                            <ScatterPlot :data="data"/>
                        </va-card-content>
                    </va-card>
                </div>            
            </div>
        </div>


        <div class="flex  lg9 md8">
            <div class="row margin-spacer">
                <div class="flex lg12 md12 sm12 xs12">
                    <va-tabs color="info" grow v-model="tabValue">
                        <template #tabs>
                            <va-tab
                                v-for="tab in tabs"
                                :key="tab.id"
                                :disabled="tab.id === 'JBrowse'"
                                >
                                <va-icon v-if="tab.icon" :name="tab.icon"/>
                                {{ tab.title }}
                            </va-tab>
                        </template>
                    </va-tabs>
                </div>
            </div>
            <div v-if="tabValue === 1" class="row margin-spacer">
                <div class="flex lg12 md12">
                    <va-card>
                        <va-card-content>
                            <div class="row align-center">
                                <div class="flex margin-spacer">
                                    <va-input style="min-width:300px" placeholder="Find an experiment.."/>
                                </div>
                                <div class="flex margin-spacer">
                                    <va-button-dropdown color="secondary" label="Tissues">
                                    <div style="max-height:300px;overflow:auto">
                                        <va-tree-view
                                        v-model:checked="selectedNodes"
                                        :nodes="tissueNodes"
                                        selectable
                                        expand-all
                                    />
                                    <va-tree-view
                                        v-model:checked="selectedNodes"
                                        :nodes="tissueNodes"
                                        selectable
                                        expand-all
                                    />
                                    </div>
                                    </va-button-dropdown>
                                </div>
                                <div class="flex margin-spacer">
                                    <va-button-dropdown color="secondary" label="Timepoints">
                                        <va-card >
                                    <va-card-content style="max-height:300px;overflow:auto">
                                        <va-tree-view
                                        v-model:checked="selectedNodes"
                                        :nodes="tissueNodes"
                                        selectable
                                        expand-all
                                    />
                                    <va-tree-view
                                        v-model:checked="selectedNodes"
                                        :nodes="tissueNodes"
                                        selectable
                                        expand-all
                                    />
                                    </va-card-content>
                                </va-card>
                                    </va-button-dropdown>
                                </div>
                            </div>
                        </va-card-content>
                        <va-card-content>

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
                                        <ScatterPlot :data="data"/>
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
import { organisms,timepoints } from '../static-config';
import {computed,onMounted,ref} from 'vue'
import {fExperiments,hExperiments} from '../stores/ExperimentStore'
import ScatterPlot from '../components/ScatterPlot.vue'
import rnaSeq from "../assets/notrypsin-rna-seq-fly-avg.json"
import FlyBaseService from "../services/FlyBaseService"
import TimePoints from '../components/TimePoints.vue'


const tabs = [
    { icon: 'menu_book', title: 'Overview',id:'Overview'},
    { title: 'RNA-Seq', id:'RNASeq' },
    { title: 'ChIP-Seq', id:'ChipSeq' },
    { icon: 'search', title: 'Gene Expression', id:'GeneSearch' },
    { title: 'Genome Browser', id:'JBrowse' },

]
const tabValue = ref(0)

const Exp = props.organism === 'fly'? fExperiments():hExperiments()
const index=ref(1)
const pageSize=ref(5)
const props = defineProps({
    organism:String,
})
const selectedNodes = ref([])

const tissueNodes = [
          { id: 2, label: 'Antenna' },
          { id: 3, label: 'Eye' },
          { id: 4, label: 'Leg' },
          {
            id: 5,
            label: 'Wing',
            children: [
                { id: 6, label: 'anterior' },
                { id: 7, label: 'dorsal' },
                { id: 8, label: 'posterior' },
                { id: 9, label: 'ventral' },
            ],
        },
]

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
    selectedOrganism.value = organisms.find(org => org.id === props.organism)
    selectedTimepoints.value = timepoints.find(tp => tp.organism === props.organism).values
    // data.value = rnaSeq[0]
    // geneID.value = data.value.geneId
    // searchGeneId()
})

const paginatedExps = computed(()=> {
    return Exp.renderedExps.slice(index.value-1, index.value+pageSize.value)
})

</script>