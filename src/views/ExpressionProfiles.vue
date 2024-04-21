<template>
    <div class="row align-justify-space-between">
        <div class="flex">
            <div class="row">
                <VaTextarea class="flex lg12 md12 sm12 xs12" v-model="textAreaInput" autosize max-rows="50"
                    placeholder="Enter up to 50 comma separated gene IDs">
                </VaTextarea>
                <div class="flex">
                    <VaChip flat size="small" @click="loadExample">Load Example</VaChip>
                </div>
            </div>
            <VaDivider />
            <div class="row">
                <div class="flex">
                    <VaButton>Search</VaButton>
                </div>
            </div>
        </div>
        <div class="flex">
            <div v-if="sessionStore.selectedFeatures.length" class="row">
                <div class="flex lg12 md12 sm12 xs12">
                    <HeatMap :selected-genes="sessionStore.selectedFeatures" :selected-samples="sessionStore.samples" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref, watchEffect } from 'vue';
import HeatMap from '../components/charts/HeatMap.vue';
import { session } from '../stores/session';
import { useFeatureData } from '../../utils';


const sessionStore = session()
const textAreaInput = ref('')
const geneIds = computed(() => { return textAreaInput.value.split(',') })
let allFeatures: Record<string, any>[] = []

onMounted(async () => {

    allFeatures = (await useFeatureData()).parsedData
    textAreaInput.value = sessionStore.selectedFeatures.map(f => f.gene).join(', ')

}
)

function loadExample() {
    sessionStore.selectedFeatures = [...allFeatures.slice(1, 20)]
    textAreaInput.value = sessionStore.selectedFeatures.map(f => f.gene).join(', ')
}

</script>