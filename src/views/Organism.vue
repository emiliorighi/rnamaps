<template>
    <div class="row align-top margin-spacer">
        <div class="flex lg3 md3">
            <div class="row">
                <div class="flex">
                    <h1 style="color:var(--va-info);" class="va-h2 title">{{ selectedOrganism.title }}</h1>
                    <h1 style="color:var(--va-info);" class="va-h6 title">{{ selectedOrganism.content }}</h1>
                </div>
            </div>
            <div class="row">
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
        <div class="flex lg9 md9">
            <va-card v-if="isDataType">
                <va-card-content><h6 style="color:var(--va-secondary);" class="va-h6 title">{{ tabs.find(t => t.id === tabValue).title }}</h6></va-card-content>
                <va-card-content>
                    <ExperimentFilters :filter="filters" :options="reactiveQuery[organism][tabValue]" @node-toggle="updateQuery"/>
                    <div class="row align-center justify-space-between">
                        <div class="flex lg6 md6">
                            <va-chip shadow v-for="(k,index) in Object.keys(filters)" :key="index" icon="close" color="secondary" outline @click="removeFilter(k)">{{ filters[k] }}</va-chip>
                        </div>
                        <div class="flex">
                            <div class="row align-center">
                                <div class="flex">
                                    <span style="color:var(--va-secondary)">{{`${index+1}-${experiments.length < index + pageSize ? experiments.length : index + pageSize} of ${experiments.length}`}}</span>
                                </div>
                                <div class="flex">
                                    <va-button size="large" preset="secondary" color="secondary" round icon="chevron_left" :disabled="index-pageSize < 0" @click="index=index-pageSize"/>
                                </div>
                                <div class="flex">
                                    <va-button size="large" preset="secondary" color="secondary" round icon="chevron_right" :disabled="index+pageSize >= experiments.length" @click="index=index+pageSize"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ExperimentListNewVue :key="counter" :show="showExperiments" :experiments="paginatedExps"/>
                </va-card-content>
            </va-card>
            <va-card v-else-if="tabValue === 'GeneSearch'">
                <va-card-content>
                    <h6 style="color:var(--va-secondary);" class="va-h6 title">{{ tabs.find(t => t.id === tabValue).title }}</h6>
                </va-card-content>
                <va-card-content>
                    <SingleGeneExpression/>
                </va-card-content>
            </va-card>
        </div>
    </div>
</template>
<script setup>
import { organisms,expQuery } from '../static-config';
import {computed,onMounted,ref, watch,reactive} from 'vue'
import SingleGeneExpression from "./SingleGeneExpression.vue"
import ExperimentListNewVue from '../components/ExperimentListNew.vue';
import ExperimentFilters from '../components/ExperimentFilters.vue';
import schema from '../assets/metadata.json'


const reactiveQuery = reactive(expQuery)
const showExperiments = ref(false)
const counter = ref(0)
const experiments = ref([])
const selectedType = ref('RNAseq')
const filters = ref({})
const tabs = [
    { icon: 'menu_book', title: 'Overview',id:'Overview'},
    { title: 'RNA-Seq', id:'RNAseq' },
    { title: 'ChIP-Seq', id:'ChIPseq' },
    { icon: 'search', title: 'Gene Expression', id:'GeneSearch' },
    { title: 'Genome Browser', id:'JBrowse' },
]


const tabValue = ref('Overview')

const props = defineProps({
    organism:String,
})

const index=ref(0)
const pageSize=ref(5)

function resetPagination(){
    index.value = 0
    pageSize.value = 5
}
watch(tabValue, ()=>{
    if(!isDataType.value) return
    const keys = Object.keys(filters.value).filter(key => !reactiveQuery[props.organism][tabValue.value].map(opt => opt.key).includes(key)) //keys to remove

    if(keys.length){
        keys.forEach(k => removeFilter(k))
        return
    }
    experiments.value = filterExperiments()
    
})

const isDataType = computed(()=>{
    return tabValue.value === 'RNAseq' || tabValue.value === 'ChIPseq'
})


function removeFilter(key){
    delete filters.value[key]
    experiments.value = filterExperiments()
}
function updateQuery(payload){
    showExperiments.value = false
    filters.value[payload[0]] = payload[1]
    experiments.value = filterExperiments()
    showExperiments.value = true
    resetPagination()
}
function filterExperiments(){
    return [...schema[props.organism].filter(exp => exp.dataType === tabValue.value).filter(exp => {
        if(Object.keys(filters.value).every(key => filters.value[key] === exp[key])){
            return true
        }
        return false
    })]
}
const paginatedExps = computed(()=> {
    return experiments.value.slice(index.value, index.value+pageSize.value)
})

const selectedOrganism = ref({})

onMounted(() => {
    experiments.value.push(...schema[props.organism])
    showExperiments.value = true
    selectedOrganism.value = organisms.find(org => org.id === props.organism)
})



</script>