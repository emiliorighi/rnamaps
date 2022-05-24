<template>
  <va-collapse
    v-model="value"
    header="Columns"
  >
    <div v-for="colDef in columnDefinitions" :key="colDef" class="flex lg1 sm1 md1 xs1">
        <va-checkbox
            v-model="props.columns"
            :array-value="colDef"
            :label="colDef"
        />
    </div>
  </va-collapse>
</template>
<script setup>
import {ref} from 'vue'
    const props = defineProps({
        columns: Array,
        columnDefinitions:Array
    })
    var value=ref(false)

</script>