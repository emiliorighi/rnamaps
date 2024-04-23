<template>
  <div ref="wrapper">
  </div>
</template>
<script setup lang="ts">
import {
  JBrowseLinearGenomeView,
  createViewState
} from '@jbrowse/react-linear-genome-view'
import { createRoot } from 'react-dom/client'
import React from 'react'
import { onMounted, ref, watchEffect } from 'vue'
import { session } from '../../stores/session'
import { flyGenome } from '../../assemblies/fly'
import '@fontsource/roboto'
import RefGetPlugin from 'jbrowse-plugin-refget-api'

const wrapper = ref(null)

const props = defineProps({
  defaultSession: Object,
  configuration: Object,
  assembly: Object,
  tracks: Object,
  organism: String
})

onMounted(() => {
  wrapper.value.focus()
})

watchEffect(() => {
  renderBrowser(props.tracks)
})

function renderBrowser(newTracks) {
  const assembly = { ...flyGenome }
  const tracks = [...newTracks]
  if (wrapper.value) {
    createRoot(wrapper.value)
      .render(
        React.createElement(JBrowseLinearGenomeView, { viewState: new createViewState({ assembly: assembly, tracks: tracks, plugins: [RefGetPlugin] }) })
      )
  }

}
</script>