<template>
    <va-card class="organism-card" :to="{name:organism.route}">
        <va-card-content>
            <h2 style="color:var(--va-secondary);" class="va-h4">{{organism.title}}</h2>
        </va-card-content>
        <div class="margin-spacer">
            <va-image
            contain
            :src="organism.imagePath"
            style="height:200px"
        />
        </div>
        <va-card-content>
            <h3 style="color:var(--va-secondary);" class="va-h6">{{organism.content}}</h3>
        </va-card-content>
        <!-- <va-card-content>
            <div class="row">
                <div class="flex">
                    <va-chip outline color="secondary">{{ `${timepoints.find(org => org.organism === organism.id).values.length} timepoints` }}</va-chip>
                </div>
                <div v-for="(dt,index) in dataTypes" :key="index" class="flex">
                    <va-chip outline color="secondary">{{ dt }}</va-chip>
                </div>
                <div class="flex" v-if="organism.tissues">
                    <va-chip outline color="secondary">{{ `${tissues.length} tissues` }}</va-chip>
                </div>
            </div>
        </va-card-content>
        <va-card-actions align="between">
            <va-button border-color="secondary" color="secondary" v-for="dt in dataTypes" :key="dt">{{ `View ${dt} data` }}</va-button>
        </va-card-actions> -->
    </va-card>
</template>
<script setup>
import {experiments} from '../stores/experiments'
import { useRouter } from 'vue-router'
import {dataTypes, timepoints,tissues} from '../static-config'
import { computed, onMounted,ref } from 'vue';


onMounted(()=> {

})

const props = defineProps({
    organism:
        { 
            id:String,
            imagePath: String,
            title:String,
            content:String,
            route:String
        }
})


</script>
<style scoped>
.organism-card{
    border: 1px solid #995D81;
    box-shadow: 0 0 15px #995D81;
}
</style>