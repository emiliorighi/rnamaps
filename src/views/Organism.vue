<template>
    <div class="row align-top margin-spacer">
        <div class="flex lg3 md3">
            <div class="row">
                <div class="flex">
                    <h1 style="color:var(--va-info);" class="va-h2 title">{{ selectedOrganism.title }}</h1>
                    <h1 style="color:var(--va-info);" class="va-h6 title">{{ selectedOrganism.content }}</h1>
                </div>
            </div>
        </div>
        <div class="flex lg9 md9">
            <div class="row margin-spacer">
                <div class="flex lg12 md12 sm12 xs12">
                    <va-tabs color="info" grow v-model="tabValue">
                        <template #tabs>
                            <va-tab
                                v-for="tab in tabs"
                                :key="tab.id"
                                :name="tab.id"
                                :disabled="tab.id === 'JBrowse'"
                                >
                                <va-icon v-if="tab.icon" :name="tab.icon"/>
                                {{ tab.title }}
                            </va-tab>
                        </template>
                    </va-tabs>
                </div>
            </div>
            <div class="row" v-if="tabValue === 'Overview'">
                <div class="flex lg12 md12 sm12 xs12">
                    <va-timeline color="info" centered vertical>
                        <va-timeline-item color="info" v-for="(tp,index) in ['bla','bli']" :key="index" active>
                            <template #before>
                                
                            </template>
                            <template #after>
                            </template>
                        </va-timeline-item>
                    </va-timeline> 
                </div>
                <h6 style="color:var(--va-info);" class="va-h6 title">{{ tabs.find(t => t.id === tabValue).title }}</h6>
            </div>
            <va-card v-else-if="isDataType">
                <va-card-content>
                    <DataType :organism="organism" :tab-value="tabValue"/>
                </va-card-content>
            </va-card>
            <va-card v-else-if="tabValue === 'GeneSearch'">
                <va-card-content>
                    <SingleGeneExpression/>
                </va-card-content>
            </va-card>
        </div>
    </div>
</template>
<script setup>
import { organisms } from '../static-config';
import {computed,onMounted,ref} from 'vue'
import SingleGeneExpression from "./SingleGeneExpression.vue"
import DataType from '../components/tabs/DataType.vue'

const tabs = [
    { icon: 'menu_book', title: 'Overview',id:'Overview'},
    { title: 'RNA-Seq', id:'RNAseq' },
    { title: 'ChIP-Seq', id:'ChIPseq' },
    { icon: 'search', title: 'Gene Expression', id:'GeneSearch' },
    { title: 'Genome Browser', id:'JBrowse' },
]

const tabValue = ref('Overview')
const selectedOrganism = ref({})

const props = defineProps({
    organism:String,
})

const isDataType = computed(()=>{
    return tabValue.value === 'RNAseq' || tabValue.value === 'ChIPseq'
})


onMounted(() => {
    selectedOrganism.value = organisms.find(org => org.id === props.organism)
})
</script>