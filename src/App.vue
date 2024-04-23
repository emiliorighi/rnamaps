<template>
  <NavBar />
  <div class="margin-spacer">
    <div style="margin-bottom: 16px;" class="row align-end">
      <div class="flex lg12 md12 sm12 xs12">
        <h1 class="va-h1">RNA Sequencing of fly</h1>
        <p>RNA sequencing of Drosophila Melanogaster in different timepoints</p>
      </div>
    </div>
    <Filters :options="filters" />
    <va-tabs style="margin-top: 16px;" v-model="view">
      <template #tabs>
        <va-tab v-for="tab in routes" :key="tab" :name="tab.path">
          {{ tab.label }}
        </va-tab>
      </template>
    </va-tabs>
    <VaDivider style="margin:0" />
    <router-view v-slot="{ Component, route }">
      <Transition name="fade">
        <component :is="Component" :key="route.path" />
      </Transition>
    </router-view>
  </div>

</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import NavBar from './components/navbar/NavBar.vue'
import { computed, onMounted, ref, watch, watchEffect } from 'vue';
import Filters from './components/filters/Filters.vue';
import { organisms } from './data/config.json'
import { session } from './stores/session'
import { useRouter } from 'vue-router'
import { useSampleData } from '../utils';

const sessionStore = session()
const view = ref('')
const router = useRouter()
let allSamples: Record<string, any>[] = []

const filters = computed(() => {
  const dType = organisms.fly.dataTypes.find(d => d.name === 'RNAseq')
  if (dType) return dType.filters
  return []
})


watch(view, (newValue, oldValue) => {
  if (newValue !== oldValue) router.push({ name: newValue });
});

const routes = [
  {
    path: 'samples',
    label: 'Sample Table'
  },
  {
    path: 'expression-profiles',
    label: 'Expression Profiles'
  },
  {
    path: 'jbrowse2',
    label: 'Genome Browser'
  }
]


// watchEffect(() => {
onMounted(async () => {
  const { parsedData } = await useSampleData('RNAseq', 'fly')
  allSamples = parsedData
  sessionStore.samples = [...allSamples]
  view.value = 'samples'
}
)

watchEffect(() => {
  const entries = Object.entries(sessionStore.searchForm).filter(([k, v]) => v)
  fetchSamples(entries)
})


function fetchSamples(validFilters) {
  if (validFilters.length) {
    sessionStore.samples = [...allSamples.filter(s => validFilters.every(([k, v]) => v === s[k] || s[k].includes(v)))]
  } else {
    sessionStore.samples = [...allSamples]
  }
}

</script>



<style>
.margin-spacer {
  padding: 15px;
  height: 100vh;
}

body {
  font-family: 'Ubuntu', sans-serif;
  background-color: var(--va-background-element);
  color: var(--va-primary);
}

.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.secondary-background {
  background-color: var(--va-secondary);
}

.va-tabs__container {
  margin-left: 0 !important;
}
</style>
