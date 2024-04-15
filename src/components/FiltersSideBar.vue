<template>
    <VaSidebar color="secondary" width="100%">
        <VaAccordion v-model="accordionValue" multiple>
            <VaCollapse :class="{ expanded: accordionValue[idx] && opt.nodes }"
                :disabled="opt.key === 'compartment' && searchForm.tissue !== 'wing'" v-for="(opt, idx) in options"
                :key="idx">
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
                <template #body>
                    <va-sidebar-item text-color="info" active-color="tertiary" v-for="(node, index) in opt.nodes"
                        :key="index" @click="$emit('itemToggled', opt.key, node.id)"
                        :active="searchForm[opt.key] === node.id">
                        <va-sidebar-item-content>
                            <va-sidebar-item-title>
                                {{ node.label ? `${node.id} (${node.label})`: node.id }}
                            </va-sidebar-item-title>
                        </va-sidebar-item-content>
                    </va-sidebar-item>
                </template>
            </VaCollapse>
        </VaAccordion>
    </VaSidebar>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    options: Record<string, any>[]
    searchForm:Record<string,any>
}>()

const emits = defineEmits(['itemToggled'])

const accordionValue = ref(props.options.map(m => false))

const minimized = ref(false)


</script>