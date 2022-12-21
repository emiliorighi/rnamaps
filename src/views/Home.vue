<template>
    <div class="row secondary-background margin-spacer align-center justify-start">
        <div class="flex lg6 md6">
            <div class="row secondary-background margin-spacer justify-center">
                <div class="flex">
                    <h1 style="color:var(--va-info);" class="va-h1">{{title}}</h1>
                </div>
            </div>
            <div class="row secondary-background margin-spacer justify-center">
                <div class="flex">
                    <h2 style="color:var(--va-info)" class="va-h6">The RNAmaps project aims at the identification of novel genetic and epigenetic factors playing role in RNA processing.
                        Towards that end, we monitor, using massively parallel sequencing, RNA and chromatin changes across many time points in two cell differentiation models
                    </h2>
                </div>
            </div>
        </div>
    </div>
    <div class="row secondary-background margin-spacer align-center justify-start">
        <div class="flex lg6 md6">
            <div class="row secondary-background margin-spacer align-center justify-center">
                <div v-for="organism in organisms" :key="organism.title"  class="flex lg6 md6">
                    <va-button border-color="info" color="secondary">{{ organism.title }}</va-button>
                </div>
            </div>
        </div>
    </div>
    <div class="row secondary-background margin-spacer align-center justify-start">
        <div class="flex lg6 md6">
            <div class="row justify-space-between">
                <div class="flex lg3 md3" v-for="organism in organisms" :key="organism.title">
                    <OrganismCard :organism="organism"></OrganismCard>
                </div>
            </div>
        </div>
    </div>

    <div v-for="organism in organisms" :key="organism.title" class="row secondary-background margin-spacer justify-center">
        <div class="flex lg4 md4 sm6 xs6">
            <va-card>
                <div class="margin-spacer">
                    <va-image style="height:200px" :src="organism.imagePath" contain/>
                </div>
            </va-card>
        </div>
        <va-divider vertical/>
        <div class="flex">
            <div class="row justify-start">
                <div class="flex">
                    <h2 style="color:var(--va-info)" class="va-h6">
                        {{ organism.title }}
                    </h2>
                </div>
            </div>
            <div class="row">
                <div class="flex">
                    <p>{{ organism.content }}</p>
                </div>
            </div>
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
        title:'Fly',
        route:'fly-new',
        imagePath:'/development_labeled3.svg',
        content:'organ morphogenesis during fly development'
    }
]
</script>
<style scoped>
</style>

