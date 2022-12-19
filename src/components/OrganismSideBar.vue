<template>
    <div>
        <div class="row">
            <div class="flex lg12 md12 sm12 xs12">
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
                        <Transition name="slide-fade">
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
                        </Transition>
                        </div>
                    </ul>
                </va-collapse>
            </div>
        </div>
    </div>
</template>
<script setup>
import {ref, reactive,onMounted,computed} from 'vue'
import {fExperiments,hExperiments} from '../stores/ExperimentStore'


const showCollapse=reactive({dataType:true,time:true,fraction:true, tissue:true,compartment:true,antibody:true})
const Exp = props.organism === 'fly'? fExperiments():hExperiments()

const props = defineProps({
    organism:String
})

onMounted(()=>{
    Exp.loadExps()
    Exp.updateQueryInputs()
})

function handleClick(key, option){
    option.active = !option.active
    Exp.query[key] = option.active ? option.value : null
    Exp.filterExperiments()
    Exp.updateQueryInputs()
}
</script>
<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(2px);
  opacity: 0;
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