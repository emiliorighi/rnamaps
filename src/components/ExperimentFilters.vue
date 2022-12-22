<template>
    {{ selectedNodes }}
    <div class="row align-center">
        <div class="flex lg6 md6">
            <va-input v-model="expId" style="width:100%" @update:model-value="$emit('expInput',expId )"  placeholder="Find an experiment.."/>
        </div>
        <div v-for="(opt,index) in options" :key="index" class="flex">
            <va-button-dropdown round color="secondary" :label="opt.label">
                <div style="max-height:300px;overflow:auto">
                    <va-tree-view
                        @update:model-value="$emit('nodeToggle',selectedNodes)"
                        v-model:checked="selectedNodes"
                        :nodes="opt.nodes"
                        selectable
                        expand-all
                        text-by="id"
                    />
                </div>
            </va-button-dropdown>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const emits = defineEmits(['expInput','nodeToggle'])
const expId = ref('')

const selectedNodes = ref([])

watch((selectedNodes),()=>{
    console.log(selectedNodes.value)
})
const props = defineProps({
    options:Array
})

</script>