<template>
    <div class="row align-end mb-4">
        <div class="flex lg6 md8 sm12 xs12">
            <VaInput :error="filter.length >= 11 ? !selectedFeature.gene : false"
                :error-messages="[`Gene ${filter} Not found`]" clearable v-model="filter" style="width: 100%;"
                :placeholder="placeholder">
                <template #append>
                    <VaButton icon="search" />
                </template>
            </VaInput>
        </div>
    </div>
    <div v-if="selectedFeature.gene" class="row">
        <div class="flex lg6 md6 sm12 xs12">
            <div class="row">
                <div class="flex">
                    <h2 class="va-h2">{{ selectedFeature.gene }}</h2>
                </div>
            </div>
            <VaDivider />
            <VaList v-if="selectedFeature.description">
                <VaListItem v-for="(description, index) in selectedFeature.description.split('.')" :key="index"
                    class="flex cursor-pointer">
                    <VaListItemSection>
                        <VaListItemLabel :lines="10">
                            {{ description }}
                        </VaListItemLabel>
                    </VaListItemSection>
                    <VaListSeparator />
                </VaListItem>
            </VaList>
        </div>
        <div class="flex lg6 md6 sm12 xs12">
            <VaCard>
                <VaCardContent>
                    <LinePlot :gene-id="selectedFeature.gene" />

                </VaCardContent>
            </VaCard>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue'
import { useFeatureData } from '../../utils';
import LinePlot from '../components/charts/LinePlot.vue';



let allFeatures: Record<string, any>[] = []


const selectedFeature = ref<Record<string, string>>({})

onMounted(async () => {

    allFeatures = (await useFeatureData()).parsedData
}
)

const placeholder = 'Search a gene ID, ex: FBgn0000008'

const filter = ref('')


watchEffect(() => {
    if (filter.value.length > 10) {
        const v = filter.value
        const feature = allFeatures.find(f => f.gene === v)
        if (feature) {
            selectedFeature.value = { ...feature }
        }
    }
})


</script>
