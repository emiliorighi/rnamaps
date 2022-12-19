<template>
    <va-card class="organism-card" :to="{name:organism.route}">
        <va-card-content class="secondary-background"><h2 style="color:#fffffa" class="va-h6">{{organism.title}}</h2></va-card-content>
        <div class="margin-spacer">
            <va-image
            contain
            :src="organism.imagePath"
            style="height:200px"
        />
        </div>
        <va-card-content><h3 class="va-h6">{{organism.content}}</h3></va-card-content>
    </va-card>
</template>
<script setup>
import {experiments} from '../stores/experiments'
import { useRouter } from 'vue-router'

const router = useRouter()
const Exps = experiments()

const props = defineProps({
    organism:
        { 
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