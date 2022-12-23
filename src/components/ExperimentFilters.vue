<template>
    <div class="row align-center">
        <div class="flex lg4 md4">
            <va-input v-model="expId" style="width:100%" @update:model-value="$emit('expInput',expId )"  placeholder="Find an experiment.."/>
        </div>
        <div v-for="(opt,index) in options" :key="index" class="flex">
            <va-button-dropdown :disabled="opt.disabled" :close-on-content-click="false" round color="secondary" :label="opt.label">
                <div style="max-height:300px;overflow:auto">
                    <va-option-list
                        color="secondary"
                        :options="opt.nodes"
                        v-model="selectedNodes"
                        value-by="id"
                        text-by="id"
                        @update:model-value="$emit('nodeToggle',selectedNodes,opt.key)"
                    />
                </div>
            </va-button-dropdown>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const emits = defineEmits(['expInput','nodeToggle'])
const expId = ref('')

const props = defineProps({
    options:Array,
    selectedNodes:Array
})

</script>