<template>
    <div class="row align-center">
        <div v-for="(opt,index) in options" :key="index" class="flex">
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
        </div>
    </div>
</template>
<script setup>
const emits = defineEmits(['nodeToggle'])

const props = defineProps({
    options:Object,
    filter:Object
})


</script>