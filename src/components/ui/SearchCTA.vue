<template>
    <div>
        <VaTabs v-model="currentTab">
            <template #tabs>
                <VaTab v-for="org in organisms" :key="org.name" :name="org.name" :disabled="org.disabled">{{ org.name }}
                </VaTab>
            </template>
        </VaTabs>
        <VaInput :placeholder="`Search Gene ID in ${currentTab}, ex: ${geneidExample}`">
            <template #appendInner>
                <VaIcon name="search" />
            </template>
        </VaInput>
    </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';


const organisms = [
    // { name: 'Human', disabled: true },
    { name: 'Fly', disabled: false }
]

const currentTab = ref('Fly')


const geneidExample = computed(() => {
    return currentTab.value === 'Fly' ? 'FBgn0000008' : 'CTA1'
})

</script>