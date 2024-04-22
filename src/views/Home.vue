<template>
    <div style="margin-bottom: 8px;" class="row align-end">
        <div class="flex lg12 md12 sm12 xs12">
            <h1 class="va-h1">RNA Sequencing of fly</h1>
            <p>RNA sequencing of Drosophila Melanogaster in different timepoints</p>
        </div>
    </div>
    <FiltersNew :options="filters" />
    <va-tabs style="margin-top: 8px;" v-model="view">
        <template #tabs>
            <va-tab v-for="tab in routes" :key="tab" :name="tab.path">
                {{ tab.label }}
            </va-tab>
        </template>
    </va-tabs>
    <VaDivider style="margin:0" />
    <div style="padding: 15px;">
        <router-view v-slot="{ Component, route }">
            <Transition name="fade">
                <component :is="Component" :key="route.path" />
            </Transition>
        </router-view>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch, watchEffect } from 'vue';
import FiltersNew from '../components/filters/Filters.vue';
import { organisms } from '../data/config.json'
import { session } from '../stores/session'
import { useRouter } from 'vue-router'
import { useSampleData } from '../../utils';

const sessionStore = session()
const view = ref('')
const router = useRouter()
let allSamples: Record<string, any>[] = []

const filters = computed(() => {
    const dType = organisms.fly.dataTypes.find(d => d.name === 'RNAseq')
    if (dType) return dType.filters
    return []
})

onMounted(() => 
    view.value = router.currentRoute.value.name as string
)

watch(view, (newValue, oldValue) => {
    if(newValue) router.push({ name: newValue });
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
.va-tabs__container {
    margin-left: 0 !important;
}
</style>