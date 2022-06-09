<template>
    <Title :title="id"/>
    <div class="row margin-spacer">
        <div class="flex lg12">
            <va-card stripe stripe-color="primary">
                <va-card-title>Attributes</va-card-title>
                <va-card-content class="data-wrapper">
                <ul style="display: flex;
                    flex-direction: row;
                    flex-wrap: wrap">
                    <li v-for="mt in metadata" :key="mt[0]" style="padding:5px">
                        <div style="display:flex">{{mt[0]}}: <p class="text--secondary" style="margin-left:5px"> {{mt[1]}} </p></div>
                    </li>
                </ul>
                </va-card-content>
            </va-card>
        </div>
    </div>
    <div class="row margin-spacer">
        <div class="flex lg12">
            <va-card stripe stripe-color="primary">
                <va-card-title>Files</va-card-title>
                <va-card-content>
                <ul>
                    <li v-for="f in expD.expObject.files" :key="f.name" style="padding:5px">
                    <div style="display:flex;padding:5px;align-items:center;justify-content:space-between;">
                        <p>{{f.name}}</p>
                        <a :href="f.url"><va-icon color="secondary" name="download" /></a>
                    </div>
                    </li>
                </ul>
                </va-card-content>
            </va-card>
        </div>
    </div>
    <div v-if="tracks.length" class="row margin-spacer">
        <div class="flex lg12">
            <va-card stripe stripe-color="primary">
                <va-card-title>Genome Browser</va-card-title>
                    <Jbrowse2 :tracks="tracks" :organism="expD.organism"/>
            </va-card>
        </div>
    </div>
</template>
<script setup>
import { computed,ref, onMounted } from '@vue/runtime-core'
import Jbrowse2 from '../components/Jbrowse2.vue'
import Title from '../components/Title.vue'
import {expDetails} from '../stores/ExperimentStore'
import {mapper} from '../trackConfigs'
import {useRoute} from 'vue-router'
const expD = expDetails()
const route = useRoute()
const toParent= '../'
const props = defineProps({
    id:String,
})
const tracks = ref([])
onMounted(()=>{
    expD.expId = props.id
    expD.getExperiment()
    createTracks(expD.expObject.files)
})
const metadata = computed(()=>{
   return Object.keys(expD.expObject)
    .filter(k => k !== 'labExpId' && k !== 'files')
    .map(k => {return [k, expD.expObject[k]]})
})
function createTracks(files){
    const ts = files.filter(f=>f.type!== 'bed').map(f => {
        const trackObj = structuredClone(mapper[f.type])
        trackObj.trackId=f.name
        trackObj.name=f.name
        trackObj.assemblyNames.push(expD.assemblyName)
        if(trackObj.adapter.bigBedLocation){
            trackObj.adapter.bigBedLocation.uri=toParent+f.url
        }
        if(trackObj.adapter.bigWigLocation){
            trackObj.adapter.bigWigLocation.uri=toParent+f.url
        }
        return trackObj
    })
    tracks.value = ts
}
</script>

<style scoped>
.data-wrapper{
    max-height:400px;
    overflow: auto;
}
</style>