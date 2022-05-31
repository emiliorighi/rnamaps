<template>
    <table class="exp-matrix">
        <thead>
            <tr>
                <th/>
                <th class="timepoints" v-for="type in Exps.dataTypes" 
                    :key="type.label">
                    <div>
                        <!-- <span>
                            {{type.label}} 
                        </span> -->
                        <va-chip
                            square
                            size="small"
                            class="dt-chip"
                            :flat="!type.active"
                            color="#872674"
                            @click="cellClick({dataType: type.label})"
                        >
                           {{type.label}} 
                        </va-chip>
                    </div>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="space-under" v-for="tp in Exps.timepoints" :key="tp.value">
                <td class="sticky-col first-col">
                    <div>
                        <!-- <span>{{tp.label}}</span> -->
                        <va-chip
                            size="small"
                            color="#872674"
                            :flat="!tp.active"
                            @click="cellClick({timepoint: tp.value})"
                        >
                            {{tp.label}}
                        </va-chip>
                    </div>
                </td>
                <td class="exp-cell"  v-for="type in Exps.dataTypes" :key="type.label">
                    <div>
                        <!-- <span>
                            {{Exps.table[type.label][tp.value].value}}
                        </span> -->
                        <va-button
                            square
                            @click="cellClick({timepoint: tp.value, dataType: type.label})" 
                            size="small"
                            color="#872674"
                            :flat="!Exps.table[type.label][tp.value].active"
                        >
                            {{Exps.table[type.label][tp.value].value}}
                        </va-button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script setup>
import {experiments} from '../stores/experiments'
import {onMounted, reactive} from 'vue'

const Exps = experiments()


//each query element is a layer of the nested obj
function cellClick(query){
    Exps.query = {...query}
    Object.keys(Exps.table).forEach(key1 => {
        Object.keys(Exps.table[key1]).forEach(key2 => {
            Exps.table[key1][key2].active = false
        })
    })
    Exps.index=1
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
    Exps.timepoints.forEach(tp => {
        if (tp.value === query.timepoint){
            tp.active = true
        }else{
            tp.active = false
        }
    })
    Exps.dataTypes.forEach(dt => {
        if(dt.label === query.dataType){
            dt.active = true
        }else{
            dt.active = false
        }
    })
}


</script>
<style scoped>

.dt-chip{
    height: min-content;
}
/* th.timepoints{
    rotate: -90deg;
    max-height: 100px;
    width: 50px;
} */
/* 
th.timepoints {
  Something you can count on
  height: 100px;
  white-space: nowrap;
}

th.timepoints > div {
  transform: 
    Magic Numbers
    translate(25px, 51px)
    45 is really 360 - 45
    rotate(315deg);
    width: 30px;
}
th.timepoints > div > span {
  border-bottom: 1px solid #ccc;
} */

th 
{
  vertical-align: bottom;
  text-align: center;
}

th div span 
{
  -ms-writing-mode: tb-rl;
  -webkit-writing-mode: vertical-rl;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  white-space: nowrap;
}
</style>