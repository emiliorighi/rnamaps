<template>
<Title :title="organism"/>
<div class="row justify--space-between">
    <div class="flex lg3"/>
    <div style="min-height:50px"  class="flex lg9">
        <div class="row justify--space-between">
            <div class="flex">
                <div style="display:inline;margin:5px;" v-for="q in Object.keys(Exp.query)" :key="q">
                    <va-button v-if="Exp.query[q]" color="secondary" icon-right="clear" size="small" outline @click="clearFilter(q, Exp.query[q])" :rounded="false" >
                        {{Exp.query[q]}}
                    </va-button>
                </div>
            </div>
            <div v-if="Exp.renderedExps.length > pageSize" class="flex">
                <va-button color="secondary" v-if="index-pageSize >= 0" @click="index=index-pageSize" flat size="small" icon="chevron_left"/>
                <va-chip color="secondary" flat class="title">{{index+':'+(pageSize+index-1>Exp.renderedExps.length?Exp.renderedExps.length:pageSize+index-1)+' of '+(Exp.renderedExps.length)}}</va-chip>
                <va-button color="secondary" v-if="index+pageSize <= Exp.renderedExps.length" @click="index=index+pageSize" flat size="small" icon="chevron_right"/>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="flex lg3">
        <va-collapse
            class="title"
            v-for="inputKey in Object.keys(Exp.table)"
            :key="inputKey" 
            v-model="showCollapse[inputKey]"
            :header="inputKey"
            solid
            color="primary"   
        >
            <ul 
                style="max-height:150px;overflow:auto">
                <div v-for="opt in Exp.table[inputKey]"
                    :key="opt.label"
                    >
                <li 
                    v-if="opt.count > 0"
                    class="label-element"
                    @click="handleClick(inputKey, opt)" 
                >
                    <va-badge color="primary" :text="opt.count">
                        <div class="text--secondary">
                            {{opt.label}}
                        </div>
                    </va-badge>
                </li>
                </div>
            </ul>
        </va-collapse>
    </div>
   <div class="flex lg9">
        <ul>
            <li class="exp-item" v-for="exp in paginatedExps" :key="exp.labExpId">
                <div class="row justify--space-between">
                    <div class="flex" >
                        <va-button flat :to="{ name: 'experiments', params: { id: exp.labExpId }}">{{exp.labExpId}}</va-button>
                    </div>
                    <div  class="flex">
                        <va-button-dropdown
                            v-if="exp.files && exp.files.length"
                            left-icon
                            size="small"
                            :rounded="false"
                            label="files"
                        >
                            <ul>
                                <li class="file-element" v-for="file in exp.files" :key="file">
                                    <div style="display:flex;padding:5px;align-items:center;justify-content:space-between;">
                                        <a class="link" style="margin-right:5px" :href="file.url">{{file.name}}</a>
                                        <va-popover
                                            message="add track to session"
                                            placement="right"
                                        >
                                            <va-button icon="add" @click="addTrack(file)" size="small"/>
                                        </va-popover>
                                    </div>
                                </li>
                            </ul>
                        </va-button-dropdown>
                    </div>
                </div>
                <div class="row">
                    <div class="flex lg12" style="margin-left:25px;">
                        <ul>
                            <li>DataType: <span class="text--secondary">{{exp.dataType}}</span></li>
                            <li>Tissue: <span class="text--secondary">{{exp.tissue}}</span></li>
                            <li>Platform: <span class="text--secondary">{{exp.platform}}</span></li>
                        </ul>
                    </div>
                </div>
                <va-divider inset />
            </li>
        </ul>
    </div>
</div> 


</template>
<script setup>
import {fExperiments,hExperiments} from '../stores/ExperimentStore'
import {ref, reactive,onMounted,computed} from 'vue'
import {session} from '../stores/session'
import {mapper} from '../trackConfigs'
import Title from '../components/Title.vue'
import { useRoute } from 'vue-router'

const router = useRoute()
const props=defineProps({
    organism:String
})

const currentRoute = computed(()=>{
    return router.name
})
const assemblyName = props.organism === 'fly'?'dm6':'GRCh38'

const Exp = props.organism === 'fly'? fExperiments():hExperiments()
const Sess = session()

onMounted(()=>{
    Sess.currentOrganism = props.organism
    Exp.loadExps()
    Exp.updateQueryInputs()
})

const showCollapse=reactive({dataType:true,time:false,fraction:false, tissue:false,compartment:false})

const index=ref(1)
const pageSize=ref(5)

function resetPagination(){
    index.value = 1
    pageSize.value = 5
}

function handleClick(key, option){
    option.active = !option.active
    Exp.query[key] = option.active ? option.value : null
    Exp.filterExperiments()
    Exp.updateQueryInputs()
    resetPagination()
}

function clearFilter(key, value){
    Exp.query[key] = null
    Exp.filterExperiments()
    Exp.updateQueryInputs()
    resetPagination()
}

function addTrack(file){
    if(!Sess.browserTracks.length){
        Sess.currentOrganism=props.organism
    }
    const trackObj = {...mapper[file.type]}
    trackObj.trackId=file.name
    trackObj.name=file.name
    trackObj.assemblyNames.push(assemblyName)
    if(trackObj.adapter.bigBedLocation){
        trackObj.adapter.bigBedLocation.uri=file.url
    }
    if(trackObj.adapter.bigWigLocation){
        trackObj.adapter.bigWigLocation.uri=file.url
    }
    if(!Sess.browserTracks.map(t => t.name).includes(file.name)){
        Sess.browserTracks.push(trackObj)
    }
}
const paginatedExps = computed(()=> {
    return Exp.renderedExps.slice(index.value-1, index.value+pageSize.value)
})

</script>
<style scoped>
.exp-selector{
    margin: 10px 0 10px 0;
}
.label-element{
    cursor: pointer;
    padding:10px;
    width:100%
}
.label-element.active{
    background-color: #2c83e06b;
}
.label-element:hover{
    background-color: #8080805b;
}

</style>