<template>
    <div class="row align-top margin-spacer">
        <div class="flex lg3 md3 margin-spacer">
            <div class="row">
                <div class="flex">
                    <h1 style="color:var(--va-info);" class="va-h2 title">{{ selectedOrganism.title }}</h1>
                    <h1 style="color:var(--va-info);" class="va-h6 title">{{ selectedOrganism.content }}</h1>
                </div>
            </div>
            <va-divider/>
            <div class="row align-center">
                <div class="flex">
                    <va-icon color="info" name="schedule"/>
                </div>
                <div class="flex">
                    <h1 style="color:var(--va-info);" class="va-h6 title">Timepoints</h1>
                </div>
            </div>
            <div class="row">
                <div class="flex lg12 md12 sm12 xs12">
                    <div style="max-height:60vh;overflow: scroll;">
                        <va-sidebar-item  
                            v-for="tp in organisms.find(org => org.id === organism).timepoints"
                            :key="tp.id" text-color="info" >
                            <va-sidebar-item-content>
                            <va-sidebar-item-title>
                                {{ `${tp.label} (${tp.id})` }}
                            </va-sidebar-item-title>
                            </va-sidebar-item-content>
                        </va-sidebar-item>
                    </div>
                </div>
            </div>
            <div v-if="organism === 'fly'" class="row align-center">
                <div class="flex">
                    <va-icon color="info" name="science"/>
                </div>
                <div class="flex">
                    <h1 style="color:var(--va-info);" class="va-h6 title">Tissues</h1>
                </div>
            </div>
            <div v-if="organism === 'fly'" class="row">
                <div class="flex lg12 md12 sm12 xs12">
                    <div style="max-height:60vh;overflow: scroll;">
                        <va-sidebar-item  
                            v-for="t in flyTissues"
                            :key="t.id" text-color="info" >
                            <va-sidebar-item-content>
                            <va-sidebar-item-title>
                                {{ t.id }}
                            </va-sidebar-item-title>
                            </va-sidebar-item-content>
                        </va-sidebar-item>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex lg9 md9">
            <va-card>
            <div class="row margin-spacer">
                <div class="flex lg12 md12 sm12 xs12">
                    <va-tabs color="secondary" grow v-model="tabValue">
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
            <div class="margin-spacer" v-if="isDataType">
                <DataType :organism="organism" :tab-value="tabValue"/>
            </div>
            <va-card v-else-if="tabValue === 'GeneSearch'">
                <va-card-content>
                    <GeneExpression/>
                </va-card-content>
            </va-card>
            </va-card>
        </div>
    </div>
</template>
<script setup>
import { organisms,flyTissues } from '../static-config';
import {computed,onMounted,ref} from 'vue'
import DataType from '../components/tabs/DataType.vue'
import GeneExpression from '../components/tabs/GeneExpression.vue'

const tabs = [
    { title: 'RNA-Seq', id:'RNAseq' },
    { title: 'ChIP-Seq', id:'ChIPseq' },
    { icon: 'search', title: 'Gene Expression', id:'GeneSearch' },
    { title: 'Genome Browser', id:'JBrowse' },
]

const tabValue = ref('RNAseq')
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