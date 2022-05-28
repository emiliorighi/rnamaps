<template>
    <va-card class="organism-card" :to="{name:title}">
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
import {dataTypes,timepoints} from '../static-config'

const router = useRouter()
const Exps = experiments()

const props = defineProps({
  imagePath: String,
  title:String,
  content:String
})

// function toPage(title){
//     Exps.currentOrganism = title
//     Exps.dataTypes = [...dataTypes[title]]
//     Exps.timepoints = [...timepoints[title]]
//     Exps.createMatrix()
//     Exps.loadExps()
//     router.push({
//         name: title
//     })
// }

</script>
<style scoped>
.organism-card{
    border-radius: 1.25rem;
}
.organism-card:hover{
    border: 2px solid #872674;
}
</style>