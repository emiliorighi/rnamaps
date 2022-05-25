<template>
    <div class="row margin-spacer justify--center">
        <div class="flex">
            <h3 class="display-3">{{title}}</h3>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
  title: String,
})
</script>