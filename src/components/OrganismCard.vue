<template>
    <va-card class="organism-card">
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

const props = defineProps({
  imagePath: String,
  title:String,
  content:String
})
</script>
<style scoped>
.organism-card{
    border-radius: 1.25rem;
}
.organism-card:hover{
    border: 1px solid #872674;
}
</style>