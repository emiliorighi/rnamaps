<template>
    <Title :title="title"/>
    <div class="row margin-spacer">
        <div class="flex">
            <blockquote class="blockquote text--secondary">
            <p >The RNAmaps project aims at the identification of novel genetic and epigenetic factors playing role in RNA processing.
                Towards that end, we monitor, using massively parallel sequencing, RNA and chromatin changes across many time points in two cell differentiation models
            </p>
            </blockquote>
        </div>
    </div>
    <div class="row margin-spacer">
        <div v-for="organism in organisms" :key="organism.title" class="flex md6 lg6">
            <OrganismCard :route="organism.route" :title="organism.title" :content="organism.content" :imagePath="organism.imagePath"/>
        </div>
    </div>
</template>
<script setup>
import OrganismCard from '../components/OrganismCard.vue'
import Title from '../components/Title.vue'

const title = 'Uncovering and understanding RNA through Massively Parallel Sequencing'
const organisms = [
    {
        title:'human',
        route:'human-new',
        imagePath:'/transdifferentiation.v2.svg',
        content:'induced transdifferentiation of human pre-B cells into macrophages'
    },
    {
        title:'fly',
        route:'fly-new',
        imagePath:'/development_labeled3.svg',
        content:'organ morphogenesis during fly development'
    }
]
</script>
<style scoped>
</style>

