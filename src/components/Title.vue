<template>
    <div class="row margin-spacer">
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