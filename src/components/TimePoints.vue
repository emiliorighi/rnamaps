<template>
<!-- <va-card color="secondary" no-padding-v>
    <va-card-title>timepoints</va-card-title>
    <va-card-content style="max-height:66vh;overflow: auto;"> -->
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
    <!-- </va-card-content>
</va-card> -->


</template>
<script setup>

const props = defineProps({
    timepoints: Array
})

</script>