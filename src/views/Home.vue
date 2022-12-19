<template>
    <div class="row margin-spacer justify-center">
        <div class="flex lg6 md6">
            <h1 style="text-align:center" class="va-h3">{{title}}</h1>
        </div>
    </div>
    <div class="row margin-spacer justify-center">
        <div class="flex">
            <h2 style="text-align:justify" class="va-h6">The RNAmaps project aims at the identification of novel genetic and epigenetic factors playing role in RNA processing.
                Towards that end, we monitor, using massively parallel sequencing, RNA and chromatin changes across many time points in two cell differentiation models
            </h2>
        </div>
    </div>
    <div class="row margin-spacer justify-center">
        <div v-for="organism in organisms" :key="organism.title" class="margin-spacer flex">
            <OrganismCard :organism="organism"/>
        </div>
    </div>
</template>
<script setup>
import OrganismCard from '../components/OrganismCard.vue'

const title = 'Uncovering and understanding RNA through Massively Parallel Sequencing'
const organisms = [
    {
        title:'Human',
        route:'human-new',
        imagePath:'/transdifferentiation.v2.svg',
        content:'induced transdifferentiation of human pre-B cells into macrophages'
    },
    {
        title:'Fruit fly',
        route:'fly-new',
        imagePath:'/development_labeled3.svg',
        content:'organ morphogenesis during fly development'
    }
]
</script>
<style scoped>
</style>

