<template>
    <va-card class="organism-card" @click="toPage()">
        <va-image
        contain
        style="height: 200px;"
        :src="imagePath"
        />
        <va-card-title>{{title}}</va-card-title>
        <va-card-content>{{content}}</va-card-content>
    </va-card>
</template>
<script setup>
import {experiments} from '../stores/experiments'
import { useRouter } from 'vue-router'

const router = useRouter()
const Exps = experiments()

const props = defineProps({
  imagePath: String,
  title:String,
  content:String
})

function toPage(){
    Exps.currentOrganism = props.title
    Exps.createMatrix()
    router.push({
        name: props.title
    })    
}

</script>
<style scoped>
.organism-card{
    border-radius: 1.25rem;
}
.organism-card:hover{
    border: 2px solid #872674;
}
</style>