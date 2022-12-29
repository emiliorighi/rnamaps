<template>
    <div class="row">
      <div class="flex xs12">
        <va-card color="secondary" no-padding-v>
          <va-card-content>
            <va-timeline vertical style="min-width: 300px">
                <va-timeline-item color="info" :active="true">
                    <template #before>
                        <h1 style="color:var(--va-info);text-align: end;" class="va-h1 title va-timeline-item__text">{{title}}</h1>
                    </template>
                    <template #after>
                        <div style="height:33vh"></div>
                    </template>
                </va-timeline-item>
                <va-timeline-item color="info" :active="true">
                    <template #before>
                        <div style="height:33vh"></div>
                    </template>
                    <template #after>
                        <h2 style="color:var(--va-info);" class="va-h4 title va-timeline-item__text">The RNAmaps project aims at the identification of novel genetic and epigenetic factors playing role in RNA processing.
                            Towards that end, we monitor, using massively parallel sequencing, RNA and chromatin changes across many time points in two cell differentiation models:
                        </h2>
                    </template>
                </va-timeline-item>
                <va-timeline-item :active="true" color="info">
                    <template #before>
                        <OrganismCard :organism="organisms[0]"/>
                    </template>
                    <template #after>
                    </template>
                </va-timeline-item>
                <va-timeline-item :active="true" color="info">
                    <template #before>
                    </template>
                    <template #after>
                        <OrganismCard :organism="organisms[1]"/>
                    </template>
                </va-timeline-item>
                <va-timeline-item color="info">
                    <template #before>
                        <h2 style="color:var(--va-info);" class="va-h4 title va-timeline-item__text">
                            Data can be downloaded <va-icon name="download" /> or added <va-icon name="add"/> into a session <va-icon name="shopping_bag"/> to visualize in the genome browser.
                            Sessions can be imported or exported 
                        </h2>
                    </template>
                    <template #after>
                    </template>
                </va-timeline-item>
            </va-timeline>
          </va-card-content>
        </va-card>
      </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import OrganismCard from '../components/OrganismCard.vue'
import {organisms} from '../static-config'

const model = ref('fly')
const title = 'Uncovering and understanding RNA through Massively Parallel Sequencing'

</script>
<style scoped>
</style>

