<template>
    <div class="row align-center">
        <div class="flex">
            <span style="color:var(--va-secondary)">{{ `${offset + 1}-${total < offset + limit ? total : offset + limit} of
                    ${total} results` }}</span>
        </div>
        <div class="flex">
            <va-button size="large" preset="secondary" color="secondary" round icon="chevron_left"
                :disabled="offset - limit < 0" @click="updatePagination(offset - limit)" />
        </div>
        <div class="flex">
            <va-button size="large" preset="secondary" color="secondary" round icon="chevron_right"
                :disabled="offset + limit >= total" @click="updatePagination(offset + limit)" />
        </div>
    </div>
</template>
<script setup lang="ts">

const props = defineProps<{
    total: number,
    limit: number
    offset: number
}>()

const emits = defineEmits(['updatePagination'])

function updatePagination(value: number) {
    emits('updatePagination', value)
}


</script>