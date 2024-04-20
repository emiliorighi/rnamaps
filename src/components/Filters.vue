<template>
    <va-accordion v-model="accordionValue" multiple>
        <va-collapse v-for="(opt, idx) in options" :key="idx" :class="{ expanded: accordionValue[idx] && opt.nodes }"
            :disabled="opt.key === 'compartment' && filters.tissue !== 'wing'">
            <template #header>
                <va-sidebar-item text-color="info">
                    <va-sidebar-item-content>
                        <va-sidebar-item-title>
                            <div class="row align-center">
                                <div class="flex">
                                    <va-icon :name="opt.icon" />
                                </div>
                                <div class="flex">
                                    {{ opt.label }}
                                </div>
                            </div>
                        </va-sidebar-item-title>
                        <va-icon :name="accordionValue[idx] ? 'expand_less' : 'expand_more'" />
                    </va-sidebar-item-content>
                </va-sidebar-item>
            </template>
            <va-sidebar-item text-color="info" active-color="tertiary" v-for="(node, index) in opt.nodes" :key="index"
                @click="$emit('itemToggled', [opt.key, node.id], filters[opt.key] === node.id)"
                :active="filters[opt.key] === node.id">
                <va-sidebar-item-content>
                    <va-sidebar-item-title>
                        {{ node.id }}
                    </va-sidebar-item-title>
                </va-sidebar-item-content>
            </va-sidebar-item>
        </va-collapse>
    </va-accordion>
</template>
<script setup>
import { ref } from 'vue'
const emits = defineEmits(['itemToggled'])


const accordionValue = ref(props.options.map(opt => opt.open))

const props = defineProps({
    options: Object,
    filters: Object
})

</script>
<style>
.right-margin {
    margin-right: 8px;
}
</style>