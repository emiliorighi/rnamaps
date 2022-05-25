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
                        @click="cellClick({timepoints: tp.value})"
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
                        @click="cellClick({dataTypes: type.label})"
                    >
                        {{type.label}}
                    </va-button>
                </td>
                <td style="text-align:center" v-for="tp in timepoints" :key="tp.value">
                    <va-button rounded 
                        @click="cellClick({timepoints: tp.value, dataTypes: type.label})" 
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
    Object.keys(Exps.table).forEach(key1 => {
        // if(key)
        Object.keys(Exps.table[key1]).forEach(key2 => {
            Exps.table[key1][key2].active = false
        })
    })
    if(query.dataTypes && query.timepoints){
        Exps.table[query.dataTypes][query.timepoints].active = true
    }else{

    }
    props.timepoints.forEach(tp => {
        if (tp.value === query.timepoints){
            tp.active = true
        }else{
            tp.active = false
        }
    })
    props.dataTypes.forEach(dt => {
        if(dt.label === query.dataTypes){
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
    padding:.5rem
}
</style>