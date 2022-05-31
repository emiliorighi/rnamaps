<template>
    <Title :title="title"/>
    <va-divider/>
    <div class="row margin-spacer">
        <div class="flex">
            <p class="text--secondary"> The RNAmaps project aims at the identification of novel genetic and epigenetic factors playing role in RNA processing.<br/>
            Towards that end, we monitor, using massively parallel sequencing, RNA and chromatin changes across many time points in two cell differentiation models</p>
        </div>
    </div>
    <div class="row margin-spacer">
        <div v-for="organism in organisms" :key="organism.title" class="flex md6 lg6">
            <OrganismCard :title="organism.title" :content="organism.content" :imagePath="organism.imagePath"/>
        </div>
        <!-- <div class="flex lg6 md6"/> -->
    </div>
</template>
<script setup>
import Title from '../components/Title.vue'

const props = defineProps({
    id:String
})

const title = 'Uncovering and understanding RNA through Massively Parallel Sequencing'
const organisms = [
    {
        title:'human',
        imagePath:'src/assets/transdifferentiation.v2.svg',
        content:'induced transdifferentiation of human pre-B cells into macrophages'
    },
    {
        title:'fly',
        imagePath:'src/assets/development_labeled3.svg',
        content:'organ morphogenesis during fly development'
    }
]
</script>

