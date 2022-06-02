<template>
<Title :title="'Genome Browser'"/>
<Jbrowse2 :tracks="Sess.browserTracks" :organism="Sess.currentOrganism"/>
</template>
<script setup>

import Title from '../components/Title.vue'
import {onMounted} from 'vue'
import {session} from '../stores/session'
import {humanGenome} from '../assemblies/human'
import {flyGenome} from '../assemblies/fly'
import {humanAnnTrack} from '../trackConfigs'
import Jbrowse2 from '../components/Jbrowse2.vue'

const Sess = session()
const tracks = Object.assign([],Sess.browserTracks)


</script>

