<template>
    <div>
        <div class="row justify-space-end align-center">
            <div class="flex lg12 md12 sm12 xs12">
                <va-data-table :wrapper-size="400" :item-size="46" virtual-scroller sticky-header
                    :columns="['id', 'stage', 'tissue', 'replicate', 'compartment', 'actions']"
                    :items="sessionStore.samples" >
                    <template #header(actions)>

                        <VaMenu>
                            <template #anchor>
                                <VaButton preset="primary">Download </VaButton>
                            </template>
                            <VaMenuItem>
                                Download Sample Metadata ({{ total }})
                            </VaMenuItem>
                            <!-- <VaMenuItem :disabled="!totalFiles.length">
                                View in Genome Browser ({{ totalFiles.length }})
                            </VaMenuItem> -->
                        </VaMenu>
                    </template>
                    <template #cell(id)="{ row }">
                        {{ row.rowData.labExpId }}
                    </template>
                    <template #cell(actions)="{ row }">
                        <VaButton preset="primary" @click="showSampleDetails = !showSampleDetails; selectedSample = row.rowData">Show
                            Details</VaButton>
                        <VaButton :disabled="!getFiles(row.rowData.labExpId).length"
                            @click="selectedSample = row.rowData; showSampleFiles = !showSampleFiles">Related
                            Files</VaButton>
                    </template>
                </va-data-table>
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
                            <a :href="`https://public-docs.crg.es/rguigo/Data/${file.url}`">{{
                    file.url.split('/')[file.url.split('/').length - 1] }}</a>
                        </VaListItemLabel>
                    </VaListItemSection>
                    <VaListSeparator />
                </VaListItem>
            </VaList>
        </VaModal>
    </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref, watchEffect } from 'vue'
import { useSampleData } from '../../utils';
import rnaSeqFiles from '../data/fly-rnaseq.json'
import { organisms } from '../data/config.json'
import { session } from '../stores/session';

let allSamples: Record<string, any>[] = []

const flyConfigs = ref<Record<string, any>>({ dataTypes: [] })

const total = computed(() => {
    return sessionStore.samples.length
})

const sessionStore = session()

onMounted(async () => {

    flyConfigs.value = { ...organisms.fly }
    const { parsedData } = await useSampleData('RNAseq', 'fly')
    allSamples = parsedData
    sessionStore.samples = [...allSamples]
}
)

const showSampleDetails = ref(false)
const showSampleFiles = ref(false)

const selectedSample = ref<Record<string, any>>({})

const totalFiles = computed(() => {
    const ids = sessionStore.samples.map(s => s.labExpId)
    return rnaSeqFiles.filter(f => ids.find(id => f.name === id))
})




watchEffect(() => {
    const entries = Object.entries(sessionStore.searchForm).filter(([k, v]) => v)
    fetchSamples(entries)
})


function getFiles(id: string) {
    return rnaSeqFiles.filter(f => f.name === id)
}

function fetchSamples(validFilters) {
    if (validFilters.length) {
        sessionStore.samples = [...allSamples.filter(s => validFilters.every(([k, v]) => v === s[k] || s[k].includes(v)))]
    } else {
        sessionStore.samples = [...allSamples]
    }
}




</script>
