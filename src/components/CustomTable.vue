<template>
    <table class="exp-matrix">
        <thead>
            <tr>
                <th />
                <th v-for="tp in timepoints" 
                    :key="tp.value">
                    <va-chip
                        size="small"
                        class="timepoints"
                        :flat="!tp.active"
                        color="#872674"
                        @click="cellClick({timepoint: tp.value})"
                    >
                        {{tp.label}}
                    </va-chip>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="space-under" v-for="type in dataTypes" :key="type">
                <td class="sticky-col first-col">
                    <va-button
                        size="small"
                        color="#872674"
                        :outline="!type.active"
                        @click="cellClick({dataType: type.label})"
                    >
                        {{type.label}}
                    </va-button>
                </td>
                <td style="text-align:center" v-for="tp in timepoints" :key="tp.value">
                    <va-button rounded 
                        @click="cellClick({timepoint: tp.value, dataType: type.label})" 
                        style="width:min-content;" size="small"
                        color="#872674" 
                        :flat="!Exps.table[type.label][tp.value].active"
                    >
                        {{Exps.table[type.label][tp.value].value}}
                    </va-button>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script setup>
import {experiments} from '../stores/experiments'


const Exps = experiments()

//each query element is a layer of the nested obj
function cellClick(query){
    Exps.query = {...query}
    Object.keys(Exps.table).forEach(key1 => {
        Object.keys(Exps.table[key1]).forEach(key2 => {
            Exps.table[key1][key2].active = false
        })
    })
    switch (true) {
        case query.dataType !== undefined && query.timepoint !== undefined:
            Exps.table[query.dataType][query.timepoint].active = true
            Exps.filterExperiments()
            break;
        case query.dataType !== undefined:
            Object.keys(Exps.table[query.dataType]).forEach(key => {
                Exps.table[query.dataType][key].active = true
            })
            Exps.filterDTExperiments()
            break;
        case query.timepoint !== undefined:
            Object.keys(Exps.table).forEach(key1 => {
                Object.keys(Exps.table[key1]).forEach(key2 => {
                    if(key2 === query.timepoint){
                        Exps.table[key1][key2].active = true
                    }
                })
            })
            Exps.filterTPExperiments()
            break;
        default:
            break;
    }
    props.timepoints.forEach(tp => {
        if (tp.value === query.timepoint){
            tp.active = true
        }else{
            tp.active = false
        }
    })
    props.dataTypes.forEach(dt => {
        if(dt.label === query.dataType){
            dt.active = true
        }else{
            dt.active = false
        }
    })
}
const props = defineProps({
    timepoints:Array,
    dataTypes:Array,
})

</script>
<style scoped>
.timepoints{
    rotate: -45deg;
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
    left: -5px;
    text-align: end;
    background-color: white;
    z-index: 1000;
    padding:.8rem
}
</style>