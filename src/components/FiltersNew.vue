<template>
    <div class="row align-end">
        <div v-for="(opt, index) in options" class="flex" style="padding-left: 4px;padding-right: 4px;" :key="index">
            <VaSelect :disabled="opt.key === 'compartment' && sessionStore.searchForm.tissue !== 'wing'" preset="solid"
                clearable searchable highlight-matched-text :label="opt.label"
                v-model="sessionStore.searchForm[opt.key]" valueBy="id" trackBy="id"
                :textBy="(v) => v.label ? `${v.id} (${v.label})` : v.id" :options="opt.nodes">
                <template #prependInner>
                    <VaIcon :name="opt.icon" class="mr-2" />
                </template>
            </VaSelect>
        </div>
        <!-- <div class="flex">
            <VaButton icon="science" color="success">Selected Samples: {{ sessionStore.samples.length }}</VaButton>
        </div> -->
    </div>

</template>

<script setup lang="ts">
import { session } from '../stores/session'

const sessionStore = session()

const props = defineProps<{
    options: Record<string, any>[]
}>()



</script>