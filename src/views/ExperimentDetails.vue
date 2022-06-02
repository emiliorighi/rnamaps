<template>
    <Title :title="id"/>
    <div class="row margin-spacer">
        <div class="flex lg3">
            <div class="row margin-spacer">
                <div class="flex lg12">
                    <va-card stripe stripe-color="primary">
                        <va-card-title>Attributes</va-card-title>
                        <va-card-content class="data-wrapper">
                        <ul>
                            <li v-for="mt in metadata" :key="mt[0]" style="padding:5px">
                                <strong>{{mt[0]}}</strong><p class="text--secondary">{{mt[1]}}</p>
                            </li>
                        </ul>
                        </va-card-content>
                    </va-card>
                </div>
            </div>
        </div>
        <div class="flex lg9">
            <div class="row margin-spacer">
                <div class="flex lg12">
                    <va-card stripe stripe-color="primary">
                        <va-card-title>Files</va-card-title>
                        <va-card-content>
                        <ul>
                            <li v-for="f in expD.expObject.files" :key="f.name" style="padding:5px">
                            <div style="display:flex;padding:5px;align-items:center;justify-content:space-between;">
                                <a class="link" style="margin-right:5px" :href="'../'+f.url">{{f.name}}</a>
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
        </div>
    </div>
</template>
<script setup>
import { computed, watch,ref, onMounted, reactive } from '@vue/runtime-core'
import Jbrowse2 from '../components/Jbrowse2.vue'
import Title from '../components/Title.vue'
import {session} from '../stores/session'
import {expDetails} from '../stores/ExperimentStore'
import {mapper} from '../trackConfigs'
import {useRoute} from 'vue-router'
const expD = expDetails()
const route = useRoute()
const props = defineProps({
    id:String,
})
const Session = session()
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
    const ts = files.map(f => {
        const trackObj = structuredClone(mapper[f.type])
        trackObj.trackId=f.name
        trackObj.name=f.name
        trackObj.assemblyNames.push(expD.assemblyName)
        if(trackObj.adapter.bigBedLocation){
            trackObj.adapter.bigBedLocation.uri='../'+f.url
        }
        if(trackObj.adapter.bigWigLocation){
            trackObj.adapter.bigWigLocation.uri='../'+f.url
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