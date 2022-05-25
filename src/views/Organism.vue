<template>
    <Title :title="title"/>
     <div style="margin-top:50px" class="row">
       <!-- <div class="flex lg4" >
            <div class="row margin-spacer">
                <div class="flex lg12 margin-spacer">
                    <CellSvg @active="activateClass"/>
                </div>
            </div>
        </div> -->
        <div style="overflow:scroll" class="flex lg12">
            <CustomTable
                @paginate="updateExps"
                :experiments="totalExps"
                :time="time" 
                :dataTypes="dataTypes" 
                :organism="organism" 
            />
        </div>
    </div>
    <div class="row margin-spacer">
        <div class="flex lg12">
            <va-list>
                <va-list-label>
                    Metadata
                </va-list-label>
                <va-list-item
                    v-for="exp in experiments"
                    :key="exp.labExpId"
                >
                <va-list-item-section >
                    <va-list-item-label>
                        {{ exp.labExpId }}
                    </va-list-item-label>
                    <va-list-item-label caption>
                        fraction: {{ exp.fraction }}
                    </va-list-item-label>
                    <va-list-item-label caption>
                        platform: {{ exp.platform }}
                    </va-list-item-label>
                </va-list-item-section>
                <va-list-item-section icon>
                    <va-button icon="add" color="#872674"/>
                </va-list-item-section>
                </va-list-item>
            </va-list>
        </div>
    </div>
</template>
<script setup>
import expService from '../services/ExperimentService'
import {ref,computed, reactive} from 'vue'
import metadata from '../../metadata.json'
import FieldSelect from '../components/FieldSelect.vue'
import CellSvg from '../components/CellSvg.vue'
import Title from '../components/Title.vue'
import CustomTable from '../components/CustomTable.vue'

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
var perPage = ref(10)
var currentPage = ref(1)
const totalExps = expService.getExperiments({organism:props.organism})
const experiments = ref([])
const columns=props.organism === 'human'? ['labExpId','dataType','time','actions'] : ['labExpId','dataType','stage','actions']

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

function updateExps(exps){
    console.log([...exps].slice(0,perPage.value))
    experiments.value = [...exps]
    console.log(experiments)
}
</script>
<style scoped>
.timepoints{
    rotate: -45deg;
}
/* tr.space-under>td {
  padding-bottom: 1em;
} */
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
    left: -5px;
    text-align: end;
    background-color: white;
    z-index: 1000;
    padding:.8rem
}
</style>