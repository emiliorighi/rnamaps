<template>
    <div class="row align-center">
        <div v-for="(opt,index) in options" :key="index" class="right-margin flex">
            <va-button-dropdown preset="secondary" round border-color="secondary" color="secondary"  :label="opt.label" :close-on-content-click="false">
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
<style>
.right-margin{
    margin-right: 8px;
}
</style>