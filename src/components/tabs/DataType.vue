<template>
    <div class="row align-center justify-space-between">
        <div class="flex">
            <Filters :filter="filters" :options="reactiveQuery[organism][tabValue]" @node-toggle="updateQuery"/>
        </div>
        <div class="flex">
            <div class="row align-center">
                <div class="flex">
                    <span style="color:var(--va-secondary)">{{`${index+1}-${experiments.length < index + pageSize ? experiments.length : index + pageSize} of ${experiments.length} results`}}</span>
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
    <div class="row align-center justify-space-between">
        <div class="flex">
            <va-chip shadow v-for="(k,index) in Object.keys(filters)" :key="index" icon="close" color="secondary" @click="removeFilter(k)">{{ filters[k] }}</va-chip>
        </div>
    </div>
    <Experiments :experiments="paginatedExps"/>
</template>
<script setup>
import {ref,computed,reactive,watch,onMounted} from 'vue'
import Experiments from '../Experiments.vue'
import Filters from '../Filters.vue'
import {expQuery} from '../../static-config'
import schema from '../../assets/metadata.json'

const index=ref(0)
const pageSize=ref(10)
const reactiveQuery = reactive(expQuery)
const experiments = ref([])
const filters = ref({})

const props = defineProps({
    tabValue:String,
    organism:String
})

const paginatedExps = computed(()=> {
    return experiments.value.slice(index.value, index.value+pageSize.value)
})

watch(()=>props.tabValue, ()=>{
    //keys to remove
    console.log('hello')
    const keys = Object.keys(filters.value)
        .filter(key => !reactiveQuery[props.organism][props.tabValue]
        .map(opt => opt.key)
        .includes(key)) 
    if(keys.length){
        keys.forEach(k => removeFilter(k))
        return
    }
    experiments.value = filterExperiments()
})

onMounted(() => {
    experiments.value.push(...schema[props.organism])
})

function resetPagination(){
    index.value = 0
    pageSize.value = 10
}

function updateQuery(payload){
    filters.value[payload[0]] = payload[1]
    experiments.value = filterExperiments()
    resetPagination()
}

function removeFilter(key){
    delete filters.value[key]
    experiments.value = filterExperiments()
}

function filterExperiments(){
    return [...schema[props.organism].filter(exp => exp.dataType === props.tabValue).filter(exp => {
        if(Object.keys(filters.value).every(key => filters.value[key] === exp[key])){
            return true
        }
        return false
    })]
}
</script>