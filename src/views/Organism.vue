<template>
    <Title :title="title"/>
    <div class="row margin-spacer">
        <div class="flex lg4" >
            <div class="row margin-spacer">
                <div class="flex lg12 md12 margin-spacer">
                    <CellSvg @active="activateClass"/>
                </div>
            </div>
        </div>
        <div class="flex lg8">
            <table class="exp-matrix">
                <thead>
                    <tr>
                        <th class="sticky-col first-col"/>
                        <th v-for="tp in time" 
                            :key="tp.value">
                            <va-chip
                                class="timepoints"
                                
                                flat
                                color="#872674"
                            >
                                {{tp.label}}
                            </va-chip>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="space-under" v-for="type in dataTypes" :key="type.label">
                        <td class="sticky-col first-col">
                            <va-chip
                                color="#872674"
                                :outline="!type.hovered"
                            >
                                {{type.label}}
                            </va-chip>
                        </td>
                        <td style="text-align:center" v-for="tp in time" :key="tp.value">
                            <va-button style="width:min-content;" size="small" color="#872674" flat class="mr-4">
                                {{getExperimentsLength(type.label,tp.value)}}
                            </va-button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="row margin-spacer">
        <div class="flex lg6" style="overflow:scroll">
            <va-data-table 
                :items="experiments" 
                :columns="columns"
                :style="{
                    '--va-data-table-scroll-table-color': '#872674',
                }"
                :per-page="perPage"
                :current-page="currentPage"
                @filtered="filtered = $event.items"
            >
                <template #header(actions)/>
                <template #cell(actions)><va-button size="small" color="#872674" icon='add'></va-button></template>
                <template #bodyAppend>
                    <tr>
                        <td colspan="1"/>
                        <td colspan="2">
                            <va-pagination
                                flat
                                color="#872674"
                                v-model="currentPage"
                                :pages="pages"
                                input
                            />
                        </td>
                    </tr>
                </template>
            </va-data-table>
        </div>
    </div>
</template>
<script setup>
import expService from '../services/ExperimentService'
import {ref,computed, reactive} from 'vue'
import FieldSelect from '../components/FieldSelect.vue'
import CellSvg from '../components/CellSvg.vue'
import Title from '../components/Title.vue'

const dataTypes=reactive([
    {label:'Proteomics',color:'#2b4135',hovered:false},
    {label:'RibosomeProfiling',color:'#a08852',hovered:false}, 
    {label:'RNAseq',color:'#3d80b9',hovered:false},
    {label:'ChIPseq',color:'872674',hovered:false}])

const humanTimes = [
    {label: "Oh",value: "00d00h00m"},
    {label: "3h",value: "00d03h00m"},
    {label: "6h",value: "00d06h00m"},
    {label: "9h",value: "00d09h00m"},
    {label: "12h",value: "00d12h00m"},
    {label: "18h",value: "00d18h00m"},
    {label: "1d",value: "01d00h00m"},
    {label: "1d12h",value: "01d12h00m"},
    {label: "2d",value: "02d00h00m"},
    {label: "3d",value: "03d00h00m"},
    {label: "5d",value: "05d00h00m"},
    {label: "7d",value: "07d00h00m"},
]

const flyStages = [
    {label:"L3", value:"L3"},
    {label:"LP", value:"LP"},
    {label:"WP", value:"WP"}
]

const props = defineProps({
  organism: String,
})

const selectedTime = ref('')
const title = props.organism? props.organism[0].toUpperCase() + props.organism.slice(1).toLowerCase() : ''
var listValue =ref([])
var perPage = ref(10)
var currentPage = ref(1)
const experiments = expService.getExperiments({organism:props.organism})
var filtered = [...experiments]
const columns=props.organism === 'human'? ['labExpId','dataType','time','actions'] : ['labExpId','dataType','stage','actions']
const columnDefinitions = Object.keys(experiments[0])
const pages = computed(() => {
  return (perPage && perPage.value !== 0)
        ? Math.ceil(filtered.length / perPage.value)
        : filtered.length
})

const time = computed(() => {
    if (props.organism === 'human'){
        return humanTimes
    }
    if(props.organism === 'fly'){
        return flyStages
    }
})

function activateClass(type){
    dataTypes.forEach(tp => {
        if(tp.label === type){
            tp.hovered = true
        }else{
            tp.hovered = false
        }
    })
}
function getExperimentsLength(type,tp){
    return experiments.filter(exp => {
        if (props.organism === 'fly'){
            if (exp.dataType === type && exp.stage === tp){
                return exp
            }
        }
        if (props.organism === 'human'){
            if (exp.dataType === type && exp.time === tp){
                return exp
            }
        }
    }).length
}
</script>
<style scoped>
.timepoints{
    rotate: -45deg;
}
tr.space-under>td {
  padding-bottom: 1em;
  text-align: right;
  width:fit-content
}
tbody:before {
    content:"@";
    display:block;
    line-height:10px;
    text-indent:-99999px;
}
.sticky-col {
  position: -webkit-sticky;
  position: sticky;
  background-color: white;
}

.first-col {
  width: 100px;
  min-width: 100px;
  max-width: 100px;
  left: 0px;
}
</style>