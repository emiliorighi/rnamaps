<template>
    <div class="row">
        <div v-for="(opt, index) in options" class="flex" style="padding-left: 4px;padding-right: 4px;" :key="index">
            <VaMenu :disabled="opt.key === 'compartment' && searchForm.tissue !== 'wing'">
                <template #anchor>
                    <VaButton :icon="opt.icon">{{ opt.label }}</VaButton>
                </template>
                <VaMenuItem :class="searchForm[opt.key] === n.id ? 'va-info' : 'va-primary'"
                    @selected="$emit('itemToggled', opt.key, n.id)" v-for="n in opt.nodes" :key="n.id">
                    {{ n.label ? `${n.label}
                    (${n.id})` : n.id }}
                </VaMenuItem>
            </VaMenu>
        </div>
    </div>

</template>

<script setup lang="ts">
const props = defineProps<{
    options: Record<string, any>[]
    searchForm: Record<string, any>
}>()

const emits = defineEmits(['itemToggled'])



</script>