<script setup>
import {
  JBrowseLinearGenomeView,
  createViewState
} from '@jbrowse/react-linear-genome-view'
import { createRoot } from 'react-dom/client'
import React from 'react'
import assembly from '../assembly'
import tracks from '../tracks'
import {onMounted, ref} from 'vue'

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
  createRoot(wrapper.value)
    .render(
      React.createElement(JBrowseLinearGenomeView, {viewState: new createViewState({tracks:tracks, assembly: assembly})})
      )
}
</script>

<template>
  <div ref="wrapper">
  </div>
</template>