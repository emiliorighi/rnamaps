<template>
    <va-timeline :key="counter" style="width: 100%;overflow-x: scroll;">
        <va-timeline-item :active="index<=tpIndex"  v-for="(tp,index) in selectedOrganism.timepoints" :key="index" :color="index<=tpIndex?'secondary':''">
            <template #before>
                <div class="title va-text-center" >
                    <va-button @click.right.stop.prevent="tpIndex=index-1;counter++" @click.left="tpIndex=index;counter++" round :preset="index<=tpIndex?'':'secondary'" :color="index<=tpIndex?'secondary':''">{{ tp.label }}</va-button>
                </div>
            </template>
            <template  #after>
                <div v-if="index === 0" style="color:var(--va-secondary)" class="va-title" >
                    time
                </div>
            </template>
        </va-timeline-item>
    </va-timeline>
</template>
<script setup>
import {ref} from 'vue'

const counter = ref(0)


</script>