<template>
    <va-card class="organism-card" :to="organism.path">
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
    </va-card>
</template>
<script setup>
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