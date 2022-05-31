<template>
<div class="row justify--space-between">
    <div class="flex lg3"/>
    <div style="min-height:50px"  class="flex lg9">
        <div class="row justify--space-between">
            <div class="flex">
                <div style="display:inline" v-for="q in Object.keys(Exp.query)" :key="q">
                    <va-button v-if="Exp.query[q]" icon-right="clear" size="small" @click="clearFilter(q, Exp.query[q])" outline color="#872674" >
                        {{Exp.query[q]}}
                    </va-button>
                </div>
            </div>
            <!-- <div v-if="filteredExps.length > pageSize" class="flex">
                <va-button flat size="small" color="#872674" icon="chevron_left"/>
                <va-chip color="#872674" flat class="title">{{pageSize-index+' / '+filteredExps.length}}</va-chip>
                <va-button flat color="#872674" size="small" icon="chevron_right"/>
            </div> -->
        </div>
    </div>
</div>
<div class="row">
    <div class="flex lg3">
        <va-collapse
            v-for="inputKey in Object.keys(Exp.table)"
            :key="inputKey" 
            v-model="showCollapse[inputKey]"
            :header="inputKey"
            solid
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
        <!-- <va-collapse
            v-for="q in query"
            :key="q.label"
            v-model="q.open"
            :header="q.label"
            solid
        >
            <ul>
                <li @click="handleClick(q, opt)" 
                    :class="opt.active? 'label-element active-input':'label-element'"
                    v-for="opt in formData[q.label]"
                    :key="opt.label"
                >
                <va-badge color="primary" :text="opt.count">
                    <div  class="text--secondary">
                        {{opt.label}}
                    </div>
                </va-badge>
            </li>
            </ul>
        </va-collapse> -->
    </div>
   <div class="flex lg9">
        <ul>
            <li class="exp-item" v-for="exp in paginatedExps" :key="exp.labExpId">
                <div class="row justify--space-between">
                    <div class="flex" style="margin-left:10px;">
                        <a :href="'/experiments/'+exp.labExpId" class="link">{{exp.labExpId}}</a>
                    </div>
                    <div  class="flex">
                        <va-button-dropdown
                            v-if="exp.files && exp.files.length"
                            left-icon
                            size="small"
                            outline
                            label="files"
                        >
                            <ul>
                                <li v-for="file in exp.files" :key="file">
                                    <a :href="file">{{file}}</a>
                                </li>
                            </ul>
                        </va-button-dropdown>
                        <va-button icon="add" size="small"/>
                    </div>
                </div>
                <div class="row">
                    <div class="flex lg12" style="margin-left:10px;">
                        <ul>
                            <li>DataType: <span class="text--secondary">{{exp.dataType}}</span></li>
                            <li>Fraction: <span class="text--secondary">{{exp.fraction}}</span></li>
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
import {hExperiments} from '../stores/ExperimentStore'
import {ref, reactive,onMounted,computed, watch} from 'vue'
import Title from '../components/Title.vue'
import CustomTable from '../components/CustomTable.vue'
import ExperimentCards from '../components/ExperimentCards.vue'
import ExperimentList from '../components/ExperimentList.vue'
import CellSvg from '../components/CellSvg.vue'
import {human} from '../assets/schemas/test_metadata.json'
import { dataTypes } from '../static-config'
const Exp = hExperiments()

onMounted(()=>{
    Exp.loadExps()
    Exp.updateQueryInputs()
})

const showCollapse=reactive({dataType:true,time:true,fraction:true})

const index=ref(0)
const pageSize=ref(5)

function handleClick(key, option){
    option.active = !option.active
    Exp.query[key] = option.active ? option.value : null

    Exp.filterExperiments()
    Exp.updateQueryInputs()
    // if(option.active){
    //     query[key]=option.value
    // }else{
    //     query[key]=null
    // }
}
function clearFilter(key, value){
    Exp.query[key] = null
    Exp.filterExperiments()
    Exp.updateQueryInputs()
}
const paginatedExps = computed(()=> {
    return Exp.renderedExps.slice(index.value, index.value+pageSize.value)
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