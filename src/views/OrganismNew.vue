<template>
    <div>
        <div class="row align-end">
            <div class="flex lg3 md3">
                <h1 style="color:var(--va-info);" class="va-h2 title">{{ selectedOrganism.title }}</h1>
            </div>
            <div class="flex lg9 md9">
                <va-tabs style="min-width:350px" color="info" grow v-model="tabValue">
                    <template #tabs>
                        <va-tab
                            v-for="tab in tabs"
                            :key="tab.id"
                            :name="tab.id"
                            :disabled="tab.id === 'JBrowse' && !storeSession.tracks.length"
                            >
                            <va-icon v-if="tab.icon" :name="tab.icon"/>
                            {{ tab.title }}
                        </va-tab>
                    </template>
                </va-tabs>
            </div>
        </div>
        <va-divider style="margin:0px!important"/>
        <div v-if="isDataType" class="row">
            <div style="padding-top:16px;" class="flex lg3 md3">
                <div class="row margin-spacer">
                    <h6 style="color:var(--va-info);" class="va-h6">
                        {{ tabTitle }}
                    </h6>
                </div>
                <div style="max-height:66vh;overflow:auto" class="row margin-spacer">
                    <div class="flex">
                        <Filters :filters="filters" :options="reactiveQuery[organism][tabValue]" @item-toggled="updateQuery"/>
                    </div>
                </div>
            </div>
            <div class="flex lg9 md9 margin-spacer">
                <div class="row align-center justify-space-between margin-spacer">
                    <div class="flex">
                        <va-chip style="margin:8px" shadow v-for="(k,index) in Object.keys(filters)" :key="index" :icon="reactiveQuery[organism][tabValue].find(opt => opt.key === k).icon" color="info" outline @click="removeFilter(k)">{{ filters[k] }}</va-chip>
                    </div>
                    <div class="flex">
                        <div class="row align-center">
                            <div class="flex">
                                <span style="color:var(--va-info)">{{`${index+1}-${experiments.length < index + pageSize ? experiments.length : index + pageSize} of ${experiments.length} results`}}</span>
                            </div>
                            <div class="flex">
                                <va-button size="large" preset="secondary" color="info" round icon="chevron_left" :disabled="index-pageSize < 0" @click="index=index-pageSize"/>
                            </div>
                            <div class="flex">
                                <va-button size="large" preset="secondary" color="info" round icon="chevron_right" :disabled="index+pageSize >= experiments.length" @click="index=index+pageSize"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" style="max-height:66vh;overflow:auto">
                    <div v-for="exp in paginatedExps" :key="exp.labExpId" class="flex lg6 md6 sm12 xs12 margin-spacer">
                        <ExperimentCard @chip-toggled="updateQuery" :exp="exp" :attributes="experimentKeys"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { organisms,flyTissues,expQuery } from '../static-config';
import {computed,onMounted,ref,reactive,watch} from 'vue'
import GeneExpression from '../components/tabs/GeneExpression.vue'
import Filters from '../components/Filters.vue';
import ExperimentCard from '../components/ExperimentCard.vue';
import schema from '../assets/metadata.json'
import { session } from '../stores/session';

const storeSession = session()

const tabs = [
    { title: 'RNA-Seq', id:'RNAseq' },
    { title: 'ChIP-Seq', id:'ChIPseq' },
    { icon: 'search', title: 'Gene Expression', id:'GeneSearch' },
    { title: 'Genome Browser', id:'JBrowse' },
]

const tabTitle = computed(()=>{
    return tabs.find(t => t.id === tabValue.value).title
})

const size = 10

const tabValue = ref('RNAseq')
const selectedOrganism = ref({})
const filters = ref({})
const index=ref(0)
const pageSize=ref(size)
const reactiveQuery = reactive(expQuery)
const experiments = ref([])

const props = defineProps({
    organism:String,
})

const isDataType = computed(()=>{
    return tabValue.value === 'RNAseq' || tabValue.value === 'ChIPseq'
})

const paginatedExps = computed(()=> {
    return experiments.value.slice(index.value, index.value+pageSize.value)
})

const experimentKeys = computed(()=>{
    return expQuery[props.organism][tabValue.value]
})

watch(tabValue, ()=>{
    //keys to remove
    const keys = Object.keys(filters.value)
        .filter(key => !reactiveQuery[props.organism][tabValue.value]
        .map(opt => opt.key)
        .includes(key)) 
    if(keys.length){
        keys.forEach(k => removeFilter(k))
        return
    }
    experiments.value = filterExperiments()
    resetPagination()
})

function resetPagination(){
    index.value = 0
    pageSize.value = size
}

function updateQuery(payload, isActive){
    if(isActive){
        removeFilter(payload[0])
    }else{
        filters.value[payload[0]] = payload[1]
    }
    experiments.value = filterExperiments()
    resetPagination()
}

function removeFilter(key){
    delete filters.value[key]
    experiments.value = filterExperiments()
}

function filterExperiments(){
    return [...schema[props.organism].filter(exp => exp.dataType === tabValue.value).filter(exp => {
        if(Object.keys(filters.value).every(key => filters.value[key] === exp[key])){
            return true
        }
        return false
    })]
}

onMounted(() => {
    experiments.value.push(...schema[props.organism].filter(exp => exp.dataType === tabValue.value))
    selectedOrganism.value = organisms.find(org => org.id === props.organism)
})
</script>