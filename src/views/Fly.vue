<template>
    <div class="row align-end" style="margin-bottom: 16px;">
        <div class="flex">
            <h1 style="color:var(--va-info);" class="va-h2 title">Fly</h1>
            <p style="color:var(--va-info);" class="va-text-secondary">Drosophila Melanogaster</p>
        </div>
    </div>
    <va-tabs color="info" v-model="dataType">
        <template #tabs>
            <va-tab v-for="tab in flyConfigs.dataTypes" :key="tab.name" :name="tab.name">
                {{ tab.name }}
            </va-tab>
        </template>
    </va-tabs>
    <va-divider style="margin-top:0" />
    <va-tabs color="info" v-model="rnaSeqView">
        <template #tabs>
            <va-tab v-for="tab in ['Samples', 'Genes']" :key="tab" :name="tab">
                {{ tab }}
            </va-tab>
        </template>
    </va-tabs>
    <div v-if="rnaSeqView === 'Samples'" class="row justify-space-between" style="height: 100vh;overflow: scroll;">
        <div class="flex lg3 md4 sm12 xs12">
            <FiltersSideBar :options="filters" :searchForm="searchForm" @item-toggled="updateQuery" />
        </div>
        <va-card class="flex lg9 md8 sm12 xs12">
            <va-card-content class="row align-center justify-space-between">
                <div class="flex">
                    <va-chip style="margin:8px" shadow v-for="([k, v], index) in activeFilters" :key="index"
                        color="secondary" outline @click="updateQuery(k, '')" icon="close">{{ v }}</va-chip>
                </div>
                <div class="flex">
                    <Pagination :total="pagination.total" :limit="pagination.limit" :offset="pagination.offset"
                        @update-pagination="handlePagination" />
                </div>
            </va-card-content>
            <va-card-content>
                <va-data-table height="100%" :items="paginatedSamples" />
            </va-card-content>
        </va-card>
    </div>
    <div v-else>
        <div class="flex lg3 md4 sm12 xs12">
            <FiltersSideBar :options="filters" :searchForm="searchForm" @item-toggled="updateQuery" />
        </div>
        <va-card class="flex lg9 md8 sm12 xs12">
            <va-card-content class="row align-center justify-space-between">
                <div class="flex">
                    <va-chip style="margin:8px" shadow v-for="([k, v], index) in activeFilters" :key="index"
                        color="secondary" outline @click="updateQuery(k, '')" icon="close">{{ v }}</va-chip>
                </div>
                <div class="flex">
                    <Pagination :total="pagination.total" :limit="pagination.limit" :offset="pagination.offset"
                        @update-pagination="handlePagination" />
                </div>
            </va-card-content>
            <va-card-content>
                <va-data-table height="100%" :items="paginatedSamples" />
            </va-card-content>
        </va-card>
    </div>
</template>
<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import FiltersSideBar from '../components/FiltersSideBar.vue';
import Pagination from '../components/Pagination.vue';
import { organisms } from '../../config.json';
import { useSampleData } from '../composables/useSampleData'
import { useFeatureData } from '../composables/useFeatureData'

let allSamples: Record<string, any>[] = []

let allFeatures: Record<string, any>[] = []

const samples = ref<Record<string, any>[]>([])

const initPagination = {
    limit: 20,
    offset: 0,
    total: 0
}
const rnaSeqView = ref('Samples')

const pagination = ref({ ...initPagination })

const flyConfigs = organisms.fly

const dataType = ref('RNAseq')

const columns = ref<string[]>([])

const filters = computed(() => {
    const dType = flyConfigs.dataTypes.find(d => d.name === dataType.value)
    if (dType) return dType.filters
    return []
})

const searchForm = ref(Object.fromEntries(filters.value.map(f => [f.key, ""])))

const activeFilters = computed(() => {
    return Object.entries(searchForm.value).filter(([k, v]) => v)
})

watchEffect(async () => {
    const { parsedData, headers } = await useSampleData(dataType.value, 'fly')
    columns.value = [...headers]
    allSamples = parsedData
    samples.value = [...allSamples]
    pagination.value.total = allSamples.length
})

const paginatedSamples = computed(() => {
    const size = pagination.value.offset + pagination.value.limit
    return samples.value.slice(pagination.value.offset, size)
})

function resetPagination() {
    pagination.value.limit = 20
    pagination.value.offset = 0
}

function updateQuery(key: string, value: string) {
    searchForm.value[key] = value
    fetchSamples()
    resetPagination()
}
function handlePagination(value: number) {
    pagination.value.offset = value
}

function fetchSamples() {
    if (Object.entries(searchForm.value).filter(([k, v]) => v).length) {
        const validFilters = Object.entries(searchForm.value).filter(([k, v]) => v)
        samples.value = [...allSamples.filter(s => validFilters.every(([k, v]) => v === s[k]))]
    } else {
        samples.value = [...allSamples]
    }
    pagination.value.total = samples.value.length
}

</script>

<style>
.va-tabs__container {
    margin-left: 0 !important;
}
</style>