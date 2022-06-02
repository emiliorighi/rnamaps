<template>
<OrganismDetails :organism="'human'"/>
</template>
<script setup>
import OrganismDetails from '../components/OrganismDetails.vue'

</script>
<style scoped>
.exp-selector{
    margin: 10px 0 10px 0;
}
.label-element{
    cursor: pointer;
    padding:10px;
    width:100%
}
.label-element.active{
    background-color: #2c83e06b;
}
.label-element:hover{
    background-color: #8080805b;
}
</style>