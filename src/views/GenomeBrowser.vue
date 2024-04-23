<template>
    <div class="row">
        <div class="flex lg12 md12">
            <Jbrowse2 :tracks="sessionStore.tracks" />
        </div>
    </div>
</template>
<script setup lang="ts">

import { watchEffect, computed } from 'vue';
import Jbrowse2 from '../components/genome-browser/Jbrowse2.vue'
import { session } from '../stores/session';
import rnaSeqFiles from '../data/fly-rnaseq.json'

const sessionStore = session()

const bigWitTrackTemplate = {
    "trackId": "",
    "name": "",
    "assemblyNames": ['dm6'],
    "type": "QuantitativeTrack",
    "adapter": {
        "type": "BigWigAdapter",
        "bigWigLocation": {
            "uri": "",
            "locationType": "UriLocation"
        }
    }
}
const totalFiles = computed(() => {
    const ids = sessionStore.samples.map(s => s.labExpId)
    return rnaSeqFiles.filter(f => ids.find(id => f.name === id))
})


watchEffect(async () => {
    createTracks(totalFiles.value)
})

function createTracks(files) {
    const tracks = files.map(f => {
        const splittedValues = f.url.split('/')
        const name = splittedValues[splittedValues.length - 1]
        const t = { ...bigWitTrackTemplate }
        t.trackId = name
        t.name = name
        t.adapter.bigWigLocation.uri = f.url
        return t
    })
    sessionStore.tracks = [...tracks]
}

</script>
