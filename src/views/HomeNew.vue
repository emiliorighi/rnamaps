<template>
    <div style="height: 100vh;" class="row">
        <div class="flex lg12 md12 sm12 xs12">
            <div class="row mb-4">
                <div class="flex">
                    <h1 class="va-h1">RNA Sequencing of fly</h1>
                    <p>RNA sequencing of Drosophila Melanogaster in different timepoints</p>
                </div>
            </div>
            <div class="row align-end mb-4">
                <div class="flex lg6 md8 sm12 xs12">
                    <va-tabs v-model="rnaSeqView">
                        <template #tabs>
                            <va-tab v-for="tab in ['Samples', 'Genes']" :key="tab" :name="tab">
                                {{ tab }}
                            </va-tab>
                        </template>
                    </va-tabs>
                    <VaInput style="width: 100%;" :placeholder="placeholder">
                        <template #append>
                            <VaButton icon="search" />
                        </template>
                    </VaInput>
                </div>
                <div class="flex lg4">
                    <FiltersNew v-if="rnaSeqView === 'Samples'" :options="filters" :searchForm="searchForm"
                        @item-toggled="updateQuery" />
                </div>
            </div>
            <div v-if="rnaSeqView === 'Samples'" class="row justify-space-between align-center">
                <div class="flex">
                    <div class="row align-center">
                        <div class="flex">
                            <p>Current filters:</p>
                        </div>
                        <div class="flex">
                            <va-chip style="margin:8px" shadow v-for="([k, v], index) in activeFilters" :key="index"
                                @click="updateQuery(k, '')" icon="close">{{ v }}
                            </va-chip>
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <Pagination :total="pagination.total" :limit="pagination.limit" :offset="pagination.offset"
                        @update-pagination="handlePagination" />
                </div>
                <div class="flex lg12 md12 sm12 xs12">
                    <va-data-table :columns="['id', 'stage', 'tissue', 'replicate', 'compartment', 'actions']"
                        :items="paginatedSamples">
                        <template #header(actions)>
                            <VaMenu>
                                <template #anchor>
                                    <VaButton>Actions</VaButton>
                                </template>
                                <VaMenuItem>
                                    Download Sample Metadata ({{ pagination.total }})
                                </VaMenuItem>
                                <VaMenuItem :disabled="!totalFiles.length">
                                    View in Genome Browser ({{ totalFiles.length }})
                                </VaMenuItem>
                            </VaMenu>
                        </template>
                        <template #cell(id)="{ row }">
                            {{ row.rowData.labExpId }}
                        </template>
                        <template #cell(actions)="{ row }">
                            <VaButton @click="showSampleDetails = !showSampleDetails; selectedSample = row.rowData">Show
                                Details</VaButton>
                            <VaButton :disabled="!getFiles(row.rowData.labExpId).length" @click="selectedSample = row.rowData; showSampleFiles = !showSampleFiles">Related
                                Files</VaButton>
                        </template>
                    </va-data-table>
                </div>
            </div>
        </div>
        <VaModal hide-default-actions max-height="300px" v-model="showSampleDetails">
            <h4 class="va-h4">Details of sample {{ selectedSample.labExpId }}</h4>
            <VaDivider />
            <VaList>
                <VaListItem v-for="([key, value], index) in Object.entries(selectedSample)" :key="index"
                    class="flex cursor-pointer">
                    <VaListItemSection>
                        <VaListItemLabel>
                            <b>{{ key }}:</b> {{ value }}
                        </VaListItemLabel>
                    </VaListItemSection>
                    <VaListSeparator />
                </VaListItem>
            </VaList>
        </VaModal>
        <VaModal hide-default-actions v-model="showSampleFiles">
            <h4 class="va-h4">Files of sample {{ selectedSample.labExpId }}</h4>
            <VaDivider />

            <VaList>
                <VaListItem v-for="(file, index) in getFiles(selectedSample.labExpId)" :key="index"
                    class="flex cursor-pointer">
                    <VaListItemSection>
                        <VaListItemLabel>
                            <a :href="`files/${file.url}`">{{ file.url.split('/')[file.url.split('/').length - 1] }}</a>
                        </VaListItemLabel>
                    </VaListItemSection>
                    <VaListSeparator />
                </VaListItem>
            </VaList>
        </VaModal>
    </div>
</template>
<script setup lang="ts">
import FiltersNew from '../components/FiltersNew.vue';
import { computed, ref, watchEffect } from 'vue'
import { organisms } from '../../config.json';
import { useSampleData } from '../composables/useSampleData'
import Pagination from '../components/ui/Pagination.vue';
import rnaSeqFiles from '../assets/fly-rnaseq.json'

const rnaSeqView = ref('Samples')

const placeholder = computed(() => rnaSeqView.value === 'Samples' ? 'Search a sample ID, ex: AL3' : 'Search a gene ID, ex: FBgn0000008')

const showSampleDetails = ref(false)
const showSampleFiles = ref(false)

let allSamples: Record<string, any>[] = []

const selectedSample = ref<Record<string, any>>({})

const samples = ref<Record<string, any>[]>([])

const initPagination = {
    limit: 20,
    offset: 0,
    total: 0
}

const totalFiles = computed(() => {
    const ids = samples.value.map(s => s.labExpId)
    return rnaSeqFiles.filter(f => ids.find(id => f.name === id))
})

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

function getFiles(id: string) {
    return rnaSeqFiles.filter(f => f.name === id)
}


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