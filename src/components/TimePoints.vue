<template>
    <va-timeline color="info" vertical>
        <va-timeline-item color="info" v-for="(tp,index) in timepoints" :key="index" active>
            <template #before>
                <h1 style="color:var(--va-info);text-align: end;" class="va-h6 title va-timeline-item__text">{{tp.label}}</h1>
            </template>
            <template #after>
                <va-card>
                    <va-card-content>
                        {{ tp.value }}
                    </va-card-content>
                </va-card>
            </template>
        </va-timeline-item>
    </va-timeline> 
</template>
<script setup>

const props = defineProps({
    timepoints: Array
})

</script>