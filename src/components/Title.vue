<template>
    <div class="row margin-spacer justify--start">
        <div class="flex">
            <h1 class="title display-5">{{title}}</h1>
        </div>
    </div>
    <va-divider/>
</template>
<script setup>
const props = defineProps({
  title: String,
})
</script>