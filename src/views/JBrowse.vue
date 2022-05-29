<script setup>
import {
  JBrowseLinearGenomeView,
  createViewState
} from '@jbrowse/react-linear-genome-view'
import { createRoot } from 'react-dom/client'
import React from 'react'
import {onMounted, ref} from 'vue'
import {session} from '../stores/session'
import {humanGenome} from '../assemblies/human'
const Sess = session()
const wrapper = ref(null)

const props = defineProps({
  defaultSession: Object,
  configuration:Object,
})

onMounted(()=>{
  wrapper.value.focus()
  renderBrowser()
})

function renderBrowser(){
  const tracks = Object.assign([],Sess.browserTracks)
  createRoot(wrapper.value)
    .render(
      React.createElement(JBrowseLinearGenomeView, {viewState: new createViewState({assembly:humanGenome,tracks:tracks})})
      )
}
</script>

<template>
  <div ref="wrapper">
  </div>
</template>