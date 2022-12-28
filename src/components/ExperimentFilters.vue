<template>
    <div class="row align-center">
        <div class="flex">
            <va-option-list
                type="radio"
                :options="dataTypes"
                v-model="selectedType"
                color="secondary"
                @update:model-value="(value) => $emit('nodeToggle',['dataType', value])"
            />
        </div>
        <div v-for="(opt,index) in options[selectedType]" :key="index" class="flex">
            <va-button-dropdown color="secondary"  :label="opt.label" :close-on-content-click="false" round>
                <va-option-list
                    type="radio"
                    color="secondary"
                    :options="opt.nodes"
                    v-model="filter[opt.key]"
                    value-by="id"
                    text-by="id"
                    @update:model-value="(value) => $emit('nodeToggle',[opt.key, value])"
                />
            </va-button-dropdown>
            <!-- <va-select 
                @update:model-value="(value) => $emit('nodeToggle',[opt.key, value])"
                v-model="queryValues[opt.key]"
                bordered color="secondary"
                value-by="id"
                :label="opt.label"
                :options="opt.nodes"
                text-by="id"
            >
            </va-select> -->
        </div>
    </div>
</template>
<script setup>
import { ref,reactive } from 'vue';

const dataTypes = ['ChIPseq','RNAseq']
const selectedType = ref('RNAseq')
const filter = reactive({})
const emits = defineEmits(['expInput','nodeToggle'])

const props = defineProps({
    options:Array,
    selectedNodes:Array
})
const queryValues = reactive({})

</script>