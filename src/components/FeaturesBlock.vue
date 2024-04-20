<template>
    <div class="row justify-space-between" style="height: 100vh;overflow: scroll;">
        <va-card class="flex lg12 md12 sm12 xs12">
            <va-card-content class="row align-center justify-space-between">
                <div class="flex">
                    <VaInput @update:modelValue="fetchFeatures" v-model="filter" placeholder="Type a Gene identifier">
                    </VaInput>
                </div>
                <div class="flex">
                    <Pagination :total="pagination.total" :limit="pagination.limit" :offset="pagination.offset"
                        @update-pagination="handlePagination" />
                </div>
            </va-card-content>
            <va-card-content>
                <va-data-table :columns="['Gene', 'Actions']" height="100%" :items="paginatedFeatures">
                    <template #cell(Actions)="{ row, isExpanded }">
                        <VaButton :icon="isExpanded ? 'va-arrow-up' : 'va-arrow-down'" preset="secondary" class="w-full"
                            @click="row.toggleRowDetails()">
                            {{ isExpanded ? 'Hide' : 'More info' }}
                        </VaButton>
                    </template>
                    <template #expandableRow="{ rowData }">


                    </template>
                </va-data-table>
            </va-card-content>
        </va-card>
    </div>
</template>
<script setup lang="ts">
import { useFeatureData } from '../composables/useFeatureData'
import Pagination from './ui/Pagination.vue';
import SingleGeneScatterPlot from './SingleGeneScatterPlot.vue'
import { computed, onMounted, ref } from 'vue';

let allFeatures: Record<string, any>[] = []

const features = ref<Record<string, any>[]>([])

const filter = ref('')
const initPagination = {
    limit: 20,
    offset: 0,
    total: 0
}

const pagination = ref({ ...initPagination })

onMounted(async () => {
    const { parsedData } = await useFeatureData()
    allFeatures = [...parsedData]
    console.log(allFeatures)
    fetchFeatures('')
})


const paginatedFeatures = computed(() => {
    const size = pagination.value.offset + pagination.value.limit
    return features.value.slice(pagination.value.offset, size)
})

function fetchFeatures(v: string) {
    if (v) {
        features.value = [...allFeatures.filter(f => f.Gene.includes(v))]
    } else {
        features.value = [...allFeatures]
    }
    pagination.value.total = features.value.length
}

function handlePagination(value: number) {
    pagination.value.offset = value
}
</script>