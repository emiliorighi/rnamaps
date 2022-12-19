<script setup>
import {
  JBrowseLinearGenomeView,
  createViewState
} from '@jbrowse/react-linear-genome-view'
import { createRoot } from 'react-dom/client'
import React from 'react'
import {onMounted, ref} from 'vue'
import {session} from '../stores/session'
import {flyGenome} from '../assemblies/fly'
import {humanGenome} from '../assemblies/human'
import '@fontsource/roboto'
import RefGetPlugin from 'jbrowse-plugin-refget-api'

const Sess = session()
const wrapper = ref(null)

const props = defineProps({
  defaultSession: Object,
  configuration:Object,
  assembly:Object,
  tracks:Object,
  organism:String
})

onMounted(()=>{
  wrapper.value.focus()
  renderBrowser()
})

function renderBrowser(){
    const assembly = props.organism==='fly'?flyGenome:humanGenome
    console.log(assembly)
    const tracks = Object.assign([],props.tracks)
    console.log(tracks)
  createRoot(wrapper.value)
    .render(
      React.createElement(JBrowseLinearGenomeView, {viewState: new createViewState({assembly:assembly,tracks:tracks,plugins:[RefGetPlugin]})})
      )
}
</script>

<template>
  <div ref="wrapper">
  </div>
</template>