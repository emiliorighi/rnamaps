<template>
    <va-card class="organism-card" :to="{name:route}">
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
  content:String,
  route:String
})


</script>
<style scoped>
.organism-card{
    border-radius: 1.25rem;
    border: 2px solid transparent;
}
.organism-card:hover{
    border: 2px solid #0d233f;
}
</style>